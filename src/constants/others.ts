import { TProjectType } from "@/types";

const ABOUT_NOTE = [
    "This is a note about the project.",
];

const CREDIT_NOTE = [
    "Shubham Nayak || Designed by Me.",
];

const PROJECT_NATURE: { key: TProjectType; label: string }[] = [
    {
        key: "Web Application",
        label: "Web Application",
    },
    {
        key: "Website",
        label: "Website",
    },
    {
        key: "Game",
        label: "Game",
    },
    {
        key: "Experiment",
        label: "Experiment/Playful",
    },
    {
        key: "Learn from Tutorial",
        label: "Learn from Tutorial",
    },
    {
        key: "Portfolio",
        label: "Portfolio",
    },
    {
        key: "UI/UX Design",
        label: "UI/UX Design",
    },
    {
        key: "UI Interaction Design",
        label: "Interaction Design",
    },
    {
        key: "UI Micro-interaction",
        label: "Micro-interactions",
    },
    {
        key: "Motion UI Design",
        label: "Motion Design",
    },
    {
        key: "Scroll Interaction Design",
        label: "Scroll Interaction",
    },
];

const FOCUSABLE_ELEMENT_STRING =
	'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

const ROLES = {
	design: {
		label: "UI/UX Designer",
		key: "design",
	},
	fe: {
		label: "Front End Developer",
		key: "fe",
	},
	be: {
		label: "Back End Developer",
		key: "fe",
	},
	teamlead: {
		label: "Team Lead",
		key: "teamlead",
	},
};

const others = { ABOUT_NOTE, CREDIT_NOTE, PROJECT_NATURE, FOCUSABLE_ELEMENT_STRING, ROLES };

export default others;


