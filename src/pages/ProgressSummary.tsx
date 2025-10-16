import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Lightbulb, Share2, Calendar } from 'lucide-react';
import { COMPETENCIES, getCategoryEmoji } from '@/data/competencies';
import { useAssessments, usePlayerProfile } from '@/hooks/useLocalStorage';

const ProgressSummary = () => {
  const navigate = useNavigate();
  const { assessments, getTopGaps } = useAssessments();
  const { profile } = usePlayerProfile();

  const topGaps = getTopGaps(3);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getNextReviewDate = () => {
    const lastAssessment = Math.max(...assessments.map(a => a.assessmentDate));
    const nextReview = new Date(lastAssessment);
    nextReview.setMonth(nextReview.getMonth() + 1);
    return nextReview;
  };

  if (assessments.length === 0) {
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <div className="text-center max-w-md">
          <p className="text-2xl text-muted-foreground mb-6">
            You haven't assessed any competencies yet!
          </p>
          <Button onClick={() => navigate('/categories')} size="lg">
            Start Assessing
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-3xl mx-auto">
        <Button
          onClick={() => navigate('/categories')}
          variant="outline"
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Categories
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Your Progress Summary
          </h1>
          {profile?.goal && (
            <div className="bg-accent/10 rounded-xl p-6 mb-6">
              <p className="text-xl">
                <span className="font-semibold">Your Goal:</span> {profile.goal}
              </p>
            </div>
          )}
        </div>

        {topGaps.length > 0 && (
          <div className="bg-card rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <span className="text-3xl">🎯</span>
              My Biggest Gaps to Work On
            </h2>
            <div className="space-y-6">
              {topGaps.map((assessment, index) => {
                const competency = COMPETENCIES.find(c => c.id === assessment.competencyId);
                if (!competency) return null;

                return (
                  <div key={assessment.id} className="bg-muted/50 rounded-xl p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-3xl">{getCategoryEmoji(competency.category)}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                            #{index + 1}
                          </span>
                          <span className="text-lg font-semibold">
                            Gap: {assessment.gap} points
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {competency.friendlyName}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="relative h-12 bg-background rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-between px-4">
                        <div 
                          className="absolute left-0 top-0 h-full bg-accent/20"
                          style={{ width: `${(assessment.targetLevel / 10) * 100}%` }}
                        />
                        <div
                          className="absolute z-10 flex items-center justify-center"
                          style={{ left: `${(assessment.currentLevel / 10) * 100}%`, transform: 'translateX(-50%)' }}
                        >
                          <div className="bg-foreground w-8 h-8 rounded-full flex items-center justify-center text-xl">
                            ⚫
                          </div>
                        </div>
                        <div
                          className="absolute z-10 flex items-center justify-center"
                          style={{ left: `${(assessment.targetLevel / 10) * 100}%`, transform: 'translateX(-50%)' }}
                        >
                          <div className="bg-accent w-8 h-8 rounded-full flex items-center justify-center text-xl">
                            ⭐
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground mt-2 px-2">
                      <span>Now: {assessment.currentLevel}/10</span>
                      <span>Target: {assessment.targetLevel}/10</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button
              onClick={() => navigate('/activities')}
              size="lg"
              className="w-full mt-8 text-lg"
            >
              <Lightbulb className="mr-2 h-5 w-5" />
              Activities to Help Me Improve
            </Button>
          </div>
        )}

        <div className="grid gap-4 mb-6">
          <Button
            onClick={() => navigate('/categories')}
            variant="outline"
            size="lg"
            className="text-lg"
          >
            View All Competencies
          </Button>

          <Button
            onClick={() => {
              alert('Share feature coming soon! Your coach will be able to see your progress.');
            }}
            variant="outline"
            size="lg"
            className="text-lg"
          >
            <Share2 className="mr-2 h-5 w-5" />
            Share with Coach/Parent
          </Button>
        </div>

        <div className="bg-muted rounded-xl p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
            <Calendar className="h-5 w-5" />
            <span className="font-medium">Assessment Dates</span>
          </div>
          <p className="text-sm mb-1">
            Last reviewed: {formatDate(Math.max(...assessments.map(a => a.assessmentDate)))}
          </p>
          <p className="text-sm">
            Next review: {formatDate(getNextReviewDate().getTime())}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressSummary;
