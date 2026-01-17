// Types for WhyChooseUs components

export interface TimelineStep {
	step: string;
	timeframe: string;
	thaiTimeframe: string;
	title: string;
	engTitle: string;
	description: string;
	icon: string;
	isFinal?: boolean;
}

export interface MissionCard {
	icon: string;
	label: string;
	title: string;
	description: string;
}

export interface TeamBenefit {
	title: string;
	subtitle: string;
	description: string;
	icon: string;
}

export interface TrainingItem {
	title: string;
	subtitle: string;
	icon?: string;
}

export interface HardwarePartner {
	name: string;
	image: any;
}
