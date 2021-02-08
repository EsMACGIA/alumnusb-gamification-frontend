/**
 * @export
 * @class AchievementsModel
 */

export class AchievementsModel {
    achieved: Achieved[];
    not_achieved: NotAchieved[];
}

class Achieved {
    date: string;
    achievement: string;
    description: string;
}
class NotAchieved {
    achievement: string;
    description: string;
}
