import { Heading } from '@/components/heading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { QUESTIONS } from '@/constants/questions';

export const Questions = () => {
  return (
    <div className="bg-[#1F1F1F] flex flex-col items-center pb-20" id="question">
      <div className="px-2">
        <Heading
          heading="ANY QUESTIONS?"
          subheading="FREQUENTLY ASKED QUESTIONS"
          className="text-[#E2DDDB]"
        />
        <Accordion type="single" collapsible className="w-full md:w-[60vh] space-y-4 mt-20">
          {QUESTIONS.map((item, index) => (
            <AccordionItem key={index} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
