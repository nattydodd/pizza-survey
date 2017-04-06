export default function() {
  return [
    {
      question: 'What are your favourite pizza toppings?',
      description: 'Choose as many as you like!',
      options: [
        'pepperoni',
        'pineapple',
        'ham',
        'bacon',
        'mushrooms',
        'green peppers',
        'artichokes',
        'olives',
        'extra cheese',
        'anchovies',
        'no toppings'
      ],
      style: 'multiple choice'
    },
    {
      question: 'How many slices do you normally eat in one sitting?',
      description: 'Please choose one option',
      options: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      style: 'single answer'
    },
    {
      question: 'What is the name of your favourite pizza place?',
      description: 'Please enter the name',
      options: null,
      style: 'free text'
    },
    {
      question: 'How would you rate this pizza survey? :)',
      description: 'Please choose your rating (1 = Bad, 5 = Excellent)',
      options: [
        1,
        2,
        3,
        4,
        5
      ],
      style: 'free text'
    },
  ]
}
