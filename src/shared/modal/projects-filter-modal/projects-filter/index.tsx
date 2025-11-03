'use client';

import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import Radio from '@/shared/radio';
import { useTrapFocus, usePrevious } from '@/hooks';
import { projectAnimations } from '@/utils/animations';
import { FilterX } from 'lucide-react';
import { TFilterBy } from '@/types';
import { allowAppScroll, preventAppScroll } from '@/utils';

const { animateFilterSectionIn, slideInListItems, animateFilterSectionOut } = projectAnimations;

export default function BaseProjectsFilter({
  onFilterProjects,
  onCloseFilter,
  filterKey,
  filterList,
  filterBy,
  onSelectFilterBy,
}: {
  onFilterProjects: ({ key }: { key: string }) => void;
  onCloseFilter: () => void;
  filterKey: string;
  filterList: { key: string; label: string }[];
  filterBy: TFilterBy;
  onSelectFilterBy: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  // Fixed type usage (non-null assertion)
  const containerRef = useRef<HTMLDivElement>(null!);
  const containerRefSelector = gsap.utils.selector(containerRef);

  const onClose = () => {
    allowAppScroll();
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete('open_filter');

    const newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
    window.history.pushState(null, '', newRelativePathQuery);

    const listItems = containerRefSelector('[data-key="list-items"]');
    const filterOptions = containerRefSelector<HTMLDivElement>('[data-key="filter-options"]');

    const tl = animateFilterSectionOut({
      listItems,
      filterOptions: filterOptions[0],
      closeFilterBtn: document.querySelector('[data-key="close-filter-btn"]') as HTMLButtonElement,
    });
    if (tl?.isActive()) return;

    tl?.then(() => {
      onCloseFilter();
      const btnFilter = document.querySelector('[data-key="open-filter-btn"]') as HTMLElement;
      btnFilter?.focus();
    });
  };

  useEffect(() => {
    const listItems = containerRefSelector('[data-key="list-items"]');
    const filterOptions = containerRefSelector<HTMLDivElement>('[data-key="filter-options"]');

    const tl = animateFilterSectionIn({
      listItems,
      filterOptions: filterOptions[0],
      closeFilterBtn: document.querySelector('[data-key="close-filter-btn"]') as HTMLButtonElement,
    });

    tl.add(() => {
      preventAppScroll();
    });
  }, []);

  const onSetFilterKey = (key: string) => {
    allowAppScroll();
    onFilterProjects({ key });
    window.history.pushState(null, 'New Page Title', `/projects?filter_by=${filterBy}&filter_key=${key}`);
    onClose();
  };

  const [initialLoad, setInitialLoad] = useState(true);
  const prevFilter = usePrevious(filterBy);

  useEffect(() => {
    if (!initialLoad && prevFilter && prevFilter !== filterBy) {
      slideInListItems({ listItems: containerRefSelector('[data-key="list-items"]') });
    } else {
      setInitialLoad(false);
    }
  }, [filterBy, initialLoad]);

  // Hook now works perfectly due to corrected ref typing
  const { onKeyDown } = useTrapFocus({
    containerRef,
    onClose,
  });

  const FILTERS = [
    { label: 'Tech Stack', key: 'tech-stack' },
    { label: 'Project Nature', key: 'project-nature' },
  ];

  return (
    <div
      ref={containerRef}
      onKeyDown={onKeyDown}
      className="fixed inset-0 z-[9999] flex w-full h-full overflow-auto backdrop-blur-2xl bg-black/30 pr-4 xl:pr-8"
    >
      {/* Overlay */}
      <div
        className="flex-1 w-[calc(100vw-250px)] cursor-[url('/icons/cancel.svg'),_pointer] sticky top-0"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <aside className="w-[250px] flex-shrink-0 pt-24 pb-16 md:pt-8 xl:pt-16 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          data-key="close-filter-btn"
          aria-label="close filter"
          className="opacity-0 bg-blue-600 hover:bg-blue-800 w-10 h-10 rounded-full flex items-center justify-center ml-auto mb-8 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <FilterX className="w-5 h-5 text-white" />
        </button>

        {/* Filter Options */}
        <div className="mb-16 opacity-0 transition-all duration-300" data-key="filter-options">
          <h4 className="mb-6 text-right text-sm uppercase font-semibold tracking-wide">Filter by</h4>

          {FILTERS.map(({ label, key }) => (
            <div key={key} className="flex items-center justify-end mb-2 text-sm cursor-pointer">
              <label htmlFor={key} className="mr-2 cursor-pointer">
                {label}
              </label>
              <Radio
                id={key}
                name="filter"
                value={key}
                onchange={onSelectFilterBy}
                checked={filterBy === key}
              />
            </div>
          ))}
        </div>

        {/* Filter List */}
        <ul className="list-none pb-40 md:pb-16 space-y-2">
          {filterList.map((item) => (
            <li
              key={item.key}
              className={`border-t-2 border-b-2 border-dotted border-transparent hover:border-white/50 transition-all duration-300 ${filterKey === item.key ? 'bg-white/10' : ''}`}
              data-key="list-items"
            >
              <button
                onClick={() => onSetFilterKey(item.key)}
                className="w-full flex justify-end text-white font-semibold text-base py-1 px-2 focus:outline-none"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
