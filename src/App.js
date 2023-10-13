import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

// Step 1: Build a static version of the App
export default function App() {
  return (
    <div>
      {/* Step 2: Pass the "faqs" data to the Accordion component */}
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  // Step 3: Map through the FAQ data and create AccordionItem components
  return (
    <div className="accordion">
      {data.map((el, i) => (
        // Step 4: Pass FAQ item data to the AccordionItem component
        <AccordionItem title={el.title} text={el.text} num={i} key={el.itle} />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  // Step 5: Define a state variable to handle the open/close state of each FAQ
  const [isOpen, setIsOpen] = useState(false);
  //Step9: an onclick function , when you click on the title it displays the paragraph
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""} `} onClick={handleToggle}>
      <p className="number">
        {/* Step 6: Add leading zeros if the FAQ number is less than 9 */}
        {num < 9 ? `0${num + 1}` : num + 1}
      </p>
      <p className="title">{title}</p>
      <p className="icon">
        {/* Step 7: Display '+' or '-' based on the "isOpen" state */}
        {isOpen ? "-" : "+"}
      </p>

      {/* Step 8: Conditionally display the FAQ content if it is open */}
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
