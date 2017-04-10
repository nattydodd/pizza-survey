export default function() {
  return [
    {
      id: 1,
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
        'anchovies'
      ],
      style: 'multiple choice'
    },
    {
      id: 2,
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
      id: 3,
      question: 'What is the name of your favourite pizza place?',
      description: 'Please enter the name',
      options: null,
      style: 'free text'
    },
    {
      id: 4,
      question: 'How would you rate this pizza survey?',
      description: 'Please choose your rating (1 = Could Be Better, 5 = Excellent)',
      options: [
        1,
        2,
        3,
        4,
        5
      ],
      style: 'single answer'
    },
  ]
}
