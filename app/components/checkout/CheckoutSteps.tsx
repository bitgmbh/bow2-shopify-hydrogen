import {FC} from 'react';
import {clsx} from 'clsx';
import {BaywaIcon} from '@bitgmbh/ebiz-react-components';
import {
  CheckoutStepKey,
  CheckoutStepsData,
  CheckoutStepType,
} from '~/components/data/checkout-steps-data';

interface CheckoutStepProps {
  step: CheckoutStepType;
  isLast: boolean;
  isActive: boolean;
  isFinished: boolean;
  isUnfinished: boolean;
  allStepsComplete: boolean;
  position: number;
}

const CheckoutStep: FC<CheckoutStepProps> = ({
  step,
  isActive,
  isLast,
  isFinished,
  isUnfinished,
  position,
  allStepsComplete,
}) => {
  const isReadOnlyStep =
    !step.url || isActive || isUnfinished || allStepsComplete;
  const Tag = isReadOnlyStep ? 'div' : 'a';
  return (
    <Tag
      {...(!isReadOnlyStep && {href: step.url})}
      className={clsx(
        'inline-flex items-center justify-start text-14 leading-24 font-semibold no-underline hover:unset gap-a w-full',
        isActive || isFinished || allStepsComplete
          ? 'text-primary-nature-green-600'
          : 'text-secondary-stone-grey-300',
      )}
    >
      <div
        className={clsx(
          'grid place-items-center rounded-full size-d text-white  shrink-0',
          isActive || isFinished || allStepsComplete
            ? 'bg-primary-nature-green-600'
            : 'bg-secondary-stone-grey-300',
        )}
      >
        {isFinished || allStepsComplete ? (
          <BaywaIcon icon="icon-ebusiness-checkmark" size="size-b" />
        ) : (
          position
        )}
      </div>
      <span className="whitespace-nowrap">{step.label}</span>
      {!isLast && (
        <div
          className={clsx(
            'min-w-[50px] w-full h-2',
            isFinished
              ? 'bg-primary-nature-green-600'
              : 'bg-secondary-stone-grey-300',
          )}
        />
      )}
    </Tag>
  );
};

interface CheckoutStepsProps {
  activeStepKey?: CheckoutStepKey;
}

export const CheckoutSteps: FC<CheckoutStepsProps> = ({activeStepKey}) => {
  const activeStepIdx = CheckoutStepsData.findIndex(
    (step) => step.stepKey === activeStepKey,
  );
  const allStepsComplete = activeStepIdx === CheckoutStepsData.length - 1;
  return (
    <ol className="inline-flex gap-a py-b justify-stretch">
      {CheckoutStepsData.map((step, positionIdx) => {
        const isLastStep = positionIdx === CheckoutStepsData.length - 1;
        return (
          <li key={step.stepKey} className={clsx(!isLastStep && 'w-full')}>
            <CheckoutStep
              allStepsComplete={allStepsComplete}
              isActive={positionIdx === activeStepIdx}
              isFinished={activeStepIdx > positionIdx}
              isLast={isLastStep}
              isUnfinished={activeStepIdx < positionIdx}
              position={positionIdx + 1}
              step={step}
            />
          </li>
        );
      })}
    </ol>
  );
};