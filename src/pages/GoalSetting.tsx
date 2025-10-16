import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { usePlayerProfile } from '@/hooks/useLocalStorage';

const SUGGESTED_GOALS = [
  'Enjoy rugby more',
  'Be a better teammate',
  'Improve my tackling',
  'Get fitter',
  'Understand the game better'
];

const GoalSetting = () => {
  const navigate = useNavigate();
  const { saveProfile } = usePlayerProfile();
  const [goal, setGoal] = useState('');

  const handleGoalSubmit = () => {
    if (goal.trim()) {
      saveProfile({
        id: `player-${Date.now()}`,
        name: 'Player', // Can be extended later
        goal: goal.trim(),
        createdDate: Date.now()
      });
      navigate('/categories');
    }
  };

  const handleSuggestedGoal = (suggestedGoal: string) => {
    setGoal(suggestedGoal);
  };

  return (
    <div className="min-h-screen bg-background p-6 flex flex-col">
      <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col justify-center">
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🏉</div>
          <h1 className="text-4xl font-bold text-primary mb-4">
            Welcome to Your Rugby Journey!
          </h1>
          <p className="text-xl text-muted-foreground">
            Let's start by setting your goal
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-lg mb-8">
          <label className="block text-2xl font-semibold text-foreground mb-6">
            My goal is to...
          </label>
          <Input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Type your goal here"
            className="text-xl h-14 mb-8"
            onKeyPress={(e) => e.key === 'Enter' && handleGoalSubmit()}
          />

          <div className="mb-6">
            <p className="text-lg text-muted-foreground mb-4">
              Or choose from these:
            </p>
            <div className="flex flex-wrap gap-3">
              {SUGGESTED_GOALS.map((suggestedGoal) => (
                <button
                  key={suggestedGoal}
                  onClick={() => handleSuggestedGoal(suggestedGoal)}
                  className="px-6 py-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full text-lg font-medium transition-colors"
                >
                  {suggestedGoal}
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={handleGoalSubmit}
            disabled={!goal.trim()}
            size="lg"
            className="w-full text-xl h-14 mt-6"
          >
            Let's Go! 🚀
          </Button>
        </div>

        <p className="text-center text-muted-foreground">
          This will help us track your progress and celebrate your wins!
        </p>
      </div>
    </div>
  );
};

export default GoalSetting;
