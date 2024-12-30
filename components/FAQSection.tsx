import React from "react";
import FAQItem from "./FAQItem";

function FAQSection() {
  return (
    <section className="w-full max-w-5xl mx-auto mt-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">FAQs</h2>
      <div className="space-y-4">
        <FAQItem
          question="How does Votely work?"
          answer="Votely allows businesses to gain recognition through customer reviews and awards."
        />
        <FAQItem
          question="Is there a cost to join?"
          answer="Joining Votely is free for basic membership, with premium plans available."
        />
        <FAQItem
          question="How can I participate in awards?"
          answer="Businesses can sign up and nominate themselves or be nominated by customers."
        />
      </div>
    </section>
  );
}

export default FAQSection;
