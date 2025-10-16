import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { COMPETENCIES, getCategoryEmoji, getCategoryTitle, getCategorySubtitle, CompetencyCategory } from '@/data/competencies';
import { useAssessments, usePlayerProfile } from '@/hooks/useLocalStorage';

const CategorySelection = () => {
  const navigate = useNavigate();
  const { assessments } = useAssessments();
  const { profile } = usePlayerProfile();

  const getCategoryProgress = (category: CompetencyCategory) => {
    const categoryCompetencies = COMPETENCIES.filter(c => c.category === category);
    const assessed = categoryCompetencies.filter(c => 
      assessments.some(a => a.competencyId === c.id)
    ).length;
    return {
      assessed,
      total: categoryCompetencies.length,
      percentage: (assessed / categoryCompetencies.length) * 100
    };
  };

  const categories: CompetencyCategory[] = ['BEHAVIOUR', 'SKILL', 'KNOWLEDGE'];

  const allAssessed = assessments.length === COMPETENCIES.length;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-3">
            Your Development Areas
          </h1>
          {profile?.goal && (
            <div className="bg-accent/10 rounded-lg p-4 mb-6">
              <p className="text-lg">
                <span className="font-semibold">Your Goal:</span> {profile.goal}
              </p>
            </div>
          )}
          <p className="text-lg text-muted-foreground">
            Choose a category to assess yourself
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {categories.map((category) => {
            const progress = getCategoryProgress(category);
            return (
              <button
                key={category}
                onClick={() => navigate(`/assess/${category.toLowerCase()}`)}
                className="w-full bg-card hover:bg-card/80 rounded-2xl p-6 shadow-lg transition-all hover:shadow-xl text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{getCategoryEmoji(category)}</div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-primary mb-2">
                      {getCategoryTitle(category)}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-4">
                      {getCategorySubtitle(category)}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Progress:</span>
                        <span className="text-muted-foreground">
                          {progress.assessed}/{progress.total} assessed
                        </span>
                      </div>
                      <Progress value={progress.percentage} className="h-3" />
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {allAssessed && (
          <div className="bg-accent/10 border-2 border-accent rounded-2xl p-6 text-center">
            <p className="text-xl font-semibold text-accent mb-4">
              🎉 Amazing! You've assessed all your competencies!
            </p>
            <Button
              onClick={() => navigate('/summary')}
              size="lg"
              className="text-lg"
            >
              View Your Progress Summary
            </Button>
          </div>
        )}

        {assessments.length > 0 && !allAssessed && (
          <div className="text-center">
            <Button
              onClick={() => navigate('/summary')}
              variant="outline"
              size="lg"
              className="text-lg"
            >
              View Progress So Far
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategorySelection;
