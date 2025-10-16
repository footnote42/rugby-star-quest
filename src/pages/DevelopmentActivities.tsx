import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { COMPETENCIES, getCategoryEmoji } from '@/data/competencies';
import { useAssessments } from '@/hooks/useLocalStorage';
import { getActivitiesForCompetency } from '@/data/activities';

const DevelopmentActivities = () => {
  const navigate = useNavigate();
  const { getTopGaps } = useAssessments();

  const topGaps = getTopGaps(3);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-3xl mx-auto">
        <Button
          onClick={() => navigate('/summary')}
          variant="outline"
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Summary
        </Button>

        <div className="text-center mb-8">
          <div className="text-5xl mb-4">💡</div>
          <h1 className="text-4xl font-bold text-primary mb-4">
            Activities to Help You Improve
          </h1>
          <p className="text-xl text-muted-foreground">
            Try these activities to work on your biggest gaps
          </p>
        </div>

        <div className="space-y-6">
          {topGaps.map((assessment, index) => {
            const competency = COMPETENCIES.find(c => c.id === assessment.competencyId);
            if (!competency) return null;

            const activities = getActivitiesForCompetency(competency.id);

            return (
              <div key={assessment.id} className="bg-card rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl">{getCategoryEmoji(competency.category)}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        Gap #{index + 1}
                      </span>
                      <span className="text-lg font-medium text-muted-foreground">
                        {assessment.gap} points
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      {competency.friendlyName}
                    </h2>
                  </div>
                </div>

                <div className="bg-accent/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    🎯 Things to Practice:
                  </h3>
                  <ul className="space-y-3">
                    {activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-accent text-xl mt-0.5">✓</span>
                        <span className="text-lg leading-relaxed">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 bg-muted/50 rounded-xl p-4">
                  <p className="text-center text-sm font-medium text-muted-foreground">
                    💪 Remember: Practice a little bit every day, and you'll see improvement!
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Button
            onClick={() => navigate('/categories')}
            size="lg"
            className="text-lg"
          >
            Continue Assessing
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentActivities;
