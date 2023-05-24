import React, { useState } from 'react'

const dataCollection = [
    {
        question: "Who do you think you are?",
        answer: "I'm Toby"

    }, {
        question: "What... what gives you the right?",
        answer: "I know it's illegal in Pennsylvania, but it's for charity, and I consider myself a great philanderer."

    }, {
        question:"It takes you thirty seconds to brush your teeth? Wow, that is ten times as long as it takes me.",
        answer:"It's simply beyond words. It's incalculable."

    }, {
        question:"Reverse psychology is an awesome tool. I don't know if you guys know about it, but, basically, you make someone think the opposite of what you believe. And that tricks them into doing something stupid. Works like a charm",
        answer:"Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me."
    }
];

const Accordion = () => {
    const [accordion, setActiveAccordion] = useState(-1);

    function toggleAccordion(index) {
        if (index === accordion) {
        setActiveAccordion(-1);
        return
        }
        setActiveAccordion(index);
    }

    return (
        <body>
            <div className="accordion__container">
                <div className="accordion__title">
                    <h2>Professional Experience</h2>
                </div>
                <div className="accordion__faq">
                    {dataCollection.map((item, index) => (
                        <div key={index} onClick={()=> toggleAccordion(index)}>
                            <div className="accordion__faq-heading">
                                <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                            </div>
                            <div>
                                {accordion === index ? (
                                    <>
                                        <span className="vertical">-</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="horizontal">+</span>
                                    </>
                                )}
                            </div>
                            <div>
                                <p className={accordion === index ? "active" : "inactive"}>
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </body>
    )
}

export default Accordion