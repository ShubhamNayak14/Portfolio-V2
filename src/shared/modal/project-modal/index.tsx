import styles from "./styles.module.scss";
import ModalWrapper from "@/shared/modal/modal-wrapper";
import SingleProject from "@/components/SingleProject";
// import Noise from "@/shared/noise";

import { Ref } from "react";

type Props = {
	selectedProjectId: string;
	modalRef: Ref<HTMLDivElement>;
	onDeselectProject: () => void;
	modalImgRef?: Ref<HTMLDivElement>;
	onGoToProject: (id: string) => void;
	isOpen: boolean;
};
export default function ProjectModal({
	selectedProjectId,
	modalRef,
	onDeselectProject,
	modalImgRef,
	onGoToProject,
	isOpen,
}: Props) {
	return (
		<ModalWrapper show={isOpen} modalRef={modalRef}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<SingleProject
						currProjectId={selectedProjectId}
						onClose={onDeselectProject}
						modalImgRef={modalImgRef}
						onGoToProject={onGoToProject}
					/>
				</div>
				<div className={styles.gradient}></div>
				{/* <Noise /> */}
			</div>
		</ModalWrapper>
	);
}
