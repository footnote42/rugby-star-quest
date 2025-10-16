import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Info, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { COMPETENCIES, CompetencyCategory, getCategoryEmoji, getCategoryTitle } from '@/data/competencies';
import { useAssessments } from '@/hooks/useLocalStorage';

const CompetencyAssessment = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const { saveAssessment, getAssessmentForCompetency } = useAssessments();

  const categoryType = category?.toUpperCase() as CompetencyCategory;
  const categoryCompetencies = COMPETENCIES.filter(c => c.category === categoryType)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [targetLevel, setTargetLevel] = useState<number | null>(null);
  const [currentLevel, setCurrentLevel] = useState<number | null>(null);

  const currentCompetency = categoryCompetencies[currentIndex];

  useEffect(() => {
    if (currentCompetency) {
      const existing = getAssessmentForCompetency(currentCompetency.id);
      if (existing) {
        setTargetLevel(existing.targetLevel);
        setCurrentLevel(existing.currentLevel);
      } else {
        setTargetLevel(null);
        setCurrentLevel(null);
      }
    }
  }, [currentIndex, currentCompetency]);

  const handleSave = () => {
    if (targetLevel && currentLevel && currentCompetency) {
      saveAssessment({
        competencyId: currentCompetency.id,
        targetLevel,
        currentLevel
      });

      if (currentIndex < categoryCompetencies.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        navigate('/categories');
      }
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const gap = targetLevel && currentLevel ? targetLevel - currentLevel : null;

  const getEncouragementMessage = (gap: number) => {
    if (gap === 0) return "Perfect! You're right where you need to be! 🌟";
    if (gap <= 2) return "You're doing great! Just a small gap to close! 👏";
    if (gap <= 4) return "Good work! You've got a clear goal to work towards! 💪";
    return "That's a big goal - let's work on it together! 🚀";
  };

  if (!currentCompetency) {
    return null;
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

        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{getCategoryEmoji(categoryType)}</span>
              <div>
                <h2 className="text-2xl font-bold text-primary">
                  {getCategoryTitle(categoryType)}
                </h2>
                <p className="text-muted-foreground">
                  {currentIndex + 1} of {categoryCompetencies.length}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-start gap-3 mb-3">
              <h3 className="text-2xl font-semibold text-foreground flex-1">
                {currentCompetency.friendlyName}
              </h3>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-primary hover:text-primary/80 transition-colors">
                    <Info className="h-6 w-6" />
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-xl">What does this mean?</DialogTitle>
                  </DialogHeader>
                  <p className="text-lg leading-relaxed">
                    {currentCompetency.tooltipText}
                  </p>
                  <Button className="mt-4">Got it!</Button>
                </DialogContent>
              </Dialog>
            </div>
            <p className="text-lg text-muted-foreground">
              {currentCompetency.tooltipText}
            </p>
          </div>

          <div className="space-y-10 mb-8">
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Where do you need to be?
              </h4>
              <div className="flex justify-between items-center gap-2 mb-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                  <button
                    key={`target-${level}`}
                    onClick={() => setTargetLevel(level)}
                    className="flex flex-col items-center gap-2 min-w-[44px] p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <div className={`text-3xl transition-all ${
                      targetLevel === level ? 'scale-125' : ''
                    }`}>
                      {targetLevel === level ? '⭐' : '☆'}
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-sm text-muted-foreground px-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                  <span key={`target-num-${level}`} className="min-w-[44px] text-center">
                    {level}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Where are you now?
              </h4>
              <div className="flex justify-between items-center gap-2 mb-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                  <button
                    key={`current-${level}`}
                    onClick={() => setCurrentLevel(level)}
                    className="flex flex-col items-center gap-2 min-w-[44px] p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <div className={`text-3xl transition-all ${
                      currentLevel === level ? 'scale-125' : ''
                    }`}>
                      {currentLevel === level ? '⚫' : '○'}
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-sm text-muted-foreground px-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                  <span key={`current-num-${level}`} className="min-w-[44px] text-center">
                    {level}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {gap !== null && (
            <div className="bg-accent/10 border-2 border-accent rounded-xl p-6 mb-8">
              <p className="text-2xl font-bold text-center text-accent mb-2">
                Your Gap: {gap} {gap === 1 ? 'point' : 'points'}
              </p>
              <p className="text-center text-lg">
                {getEncouragementMessage(gap)}
              </p>
            </div>
          )}

          <div className="flex gap-4">
            <Button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              variant="outline"
              size="lg"
              className="flex-1"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Previous
            </Button>
            <Button
              onClick={handleSave}
              disabled={targetLevel === null || currentLevel === null}
              size="lg"
              className="flex-1"
            >
              {currentIndex === categoryCompetencies.length - 1 ? (
                <>
                  <Check className="mr-2 h-5 w-5" />
                  Finish Category
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetencyAssessment;
