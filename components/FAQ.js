import React from 'react';

export default function FAQ({ questions, location = '' }) {
  return (
    <section className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Veelgestelde vragen{location ? ` over onze service in ${location}` : ''}</h2>
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={index}>
            <h3 className="font-bold mb-2">{question.q}</h3>
            <p className="text-gray-600">{question.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}