import { useState } from 'react';
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import FeedbackTypeStep from './steps/FeedbackTypeStep';
import FeedbackContentStep from './steps/FeedbackContentStep';
import FeedbackSuccessStep from './steps/FeedbackSuccessStep';

export const feedbackTypes = {
  bug: {
    title: 'Problema',
    message: 'O que está acontecendo?',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto',
    },
  },
  idea: {
    title: 'Idéia',
    message: 'Qual a sua ideia?',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada',
    },
  },
  other: {
    title: 'Outro',
    message: 'Qual o assunto deseja tratar?',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

// Object.entries(feedbackTypes)
/**
  [
    ['bug',{...}]
    ['idea',{...}]
    ['other',{...}]
  ]
*/

const FeedbackForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackSent={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestart={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{' '}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
};

export default FeedbackForm;
