/**
 * @export
 * @class AchievementsModel
 */

export class AchievementsModel {
    achieved: Achievement[];
    not_achieved: Achievement[];
}

class Achievement {
    achievement: string;
    description: string;
    date?: string;
}
