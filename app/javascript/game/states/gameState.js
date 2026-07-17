import { FighterId } from '../constants/fighter';
import { createDefaultFighterState } from './fighterState';

export var gameState = {
	fighters: [
		createDefaultFighterState(FighterId.RYU),
		createDefaultFighterState(FighterId.KEN),
	],
};

export const resetGameState = () => {
	gameState = {
		fighters: [
			createDefaultFighterState(FighterId.RYU),
			createDefaultFighterState(FighterId.KEN),
		],
	};
};
