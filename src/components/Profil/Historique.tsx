import { Fragment, useState } from "react";
import {
 Accordion,
 AccordionHeader,
 AccordionBody,
} from "@material-tailwind/react";
export default function Example() {
 const [open, setOpen] = useState(1);
 const handleOpen = (value: any) => {
   setOpen(open === value ? 0 : value);
 };
 return (
   <Fragment>
        <h1
         className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl mb-4 md:text-4xl -mb-8"
       >Mes commandes</h1>
     <Accordion className="sm:m-0 md:mt-0 lg:mt-12" open={open === 1}>
       <AccordionHeader onClick={() => handleOpen(1)}>
         What is Material Tailwind?
       </AccordionHeader>
       <AccordionBody>
         We&apos;re not always in the position that we want to be at.
         We&apos;re constantly growing. We&apos;re constantly making mistakes.
         We&apos;re constantly trying to express ourselves and actualize our
         dreams.
       </AccordionBody>
     </Accordion>
     <Accordion open={open === 2}>
       <AccordionHeader onClick={() => handleOpen(2)}>
         How to use Material Tailwind?
       </AccordionHeader>
       <AccordionBody>
         We&apos;re not always in the position that we want to be at.
         We&apos;re constantly growing. We&apos;re constantly making mistakes.
         We&apos;re constantly trying to express ourselves and actualize our
         dreams.
       </AccordionBody>
     </Accordion>
     <Accordion open={open === 3}>
       <AccordionHeader onClick={() => handleOpen(3)}>
         What can I do with Material Tailwind?
       </AccordionHeader>
       <AccordionBody>
         We&apos;re not always in the position that we want to be at.
         We&apos;re constantly growing. We&apos;re constantly making mistakes.
         We&apos;re constantly trying to express ourselves and actualize our
         dreams.
       </AccordionBody>
     </Accordion>
   </Fragment>
 );
}
