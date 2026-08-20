import { UtbkQuestion } from '../types';

export const literasiInggrisTryoutData: UtbkQuestion[] = [
  {
    id: 1,
    readingText: '**Passage 1 (Questions 1–5)**\n\nThe transition toward renewable energy is rapidly accelerating worldwide, driven by the imperative to curb greenhouse gas emissions and combat catastrophic climate change. Among various alternatives, solar photovoltaics (PV) and offshore wind turbines have witnessed the most dramatic cost reductions over the past decade. Innovative bifacial solar panels, which generate power from both sides by absorbing reflected light from the ground, have boosted energy efficiency by up to 25% compared to traditional single-sided modules.\n\nHowever, the intermittent nature of solar irradiance and wind velocity presents serious technical challenges for grid stability. Without large-scale energy storage systems, such as lithium-iron-phosphate (LFP) batteries and pumped-storage hydroelectricity, excess energy generated during peak hours cannot be effectively dispatched during periods of high demand. Consequently, modernizing power distribution infrastructure and deploying AI-driven smart grids are crucial steps to maintain supply-demand equilibrium.',
    text: 'What is the main advantage of bifacial solar panels mentioned in Passage 1?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'They are completely immune to wind damage during storms.' },
      { id: 'B', text: 'They increase energy efficiency by absorbing light from both front and rear sides.', correct: true },
      { id: 'C', text: 'They can generate electricity in total darkness without sunlight.' },
      { id: 'D', text: 'They eliminate the need for electrical wiring in power plants.' },
      { id: 'E', text: 'They are cheaper to install than fossil fuel generators.' }
    ],
    correctAnswer: 'B',
    explanation: 'Passage 1 states: "Innovative bifacial solar panels, which generate power from both sides by absorbing reflected light from the ground, have boosted energy efficiency by up to 25%..."',
    topic: 'Literal Comprehension & Technical Details',
    difficulty: 'Mudah'
  },
  {
    id: 2,
    readingText: '**Passage 1 (Questions 1–5)**\n\nThe transition toward renewable energy is rapidly accelerating worldwide, driven by the imperative to curb greenhouse gas emissions and combat catastrophic climate change. Among various alternatives, solar photovoltaics (PV) and offshore wind turbines have witnessed the most dramatic cost reductions over the past decade. Innovative bifacial solar panels, which generate power from both sides by absorbing reflected light from the ground, have boosted energy efficiency by up to 25% compared to traditional single-sided modules.\n\nHowever, the intermittent nature of solar irradiance and wind velocity presents serious technical challenges for grid stability. Without large-scale energy storage systems, such as lithium-iron-phosphate (LFP) batteries and pumped-storage hydroelectricity, excess energy generated during peak hours cannot be effectively dispatched during periods of high demand. Consequently, modernizing power distribution infrastructure and deploying AI-driven smart grids are crucial steps to maintain supply-demand equilibrium.',
    text: 'The word **"intermittent"** in paragraph 2 is closest in meaning to...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Sporadic or irregular', correct: true },
      { id: 'B', text: 'Constant and perpetual' },
      { id: 'C', text: 'Extremely powerful' },
      { id: 'D', text: 'Predictable and steady' },
      { id: 'E', text: 'Harmful and toxic' }
    ],
    correctAnswer: 'A',
    explanation: '"Intermittent" means occurring at irregular intervals or not continuous; sporadic.',
    topic: 'Vocabulary in Context',
    difficulty: 'Mudah'
  },
  {
    id: 3,
    readingText: '**Passage 1 (Questions 1–5)**\n\nThe transition toward renewable energy is rapidly accelerating worldwide, driven by the imperative to curb greenhouse gas emissions and combat catastrophic climate change. Among various alternatives, solar photovoltaics (PV) and offshore wind turbines have witnessed the most dramatic cost reductions over the past decade. Innovative bifacial solar panels, which generate power from both sides by absorbing reflected light from the ground, have boosted energy efficiency by up to 25% compared to traditional single-sided modules.\n\nHowever, the intermittent nature of solar irradiance and wind velocity presents serious technical challenges for grid stability. Without large-scale energy storage systems, such as lithium-iron-phosphate (LFP) batteries and pumped-storage hydroelectricity, excess energy generated during peak hours cannot be effectively dispatched during periods of high demand. Consequently, modernizing power distribution infrastructure and deploying AI-driven smart grids are crucial steps to maintain supply-demand equilibrium.',
    text: 'Based on Passage 1, determine whether each statement is True or False:',
    type: 'true-false-table',
    statements: [
      { id: 's1', text: 'Solar and offshore wind technologies have experienced significant cost decreases in the last decade.', correct: true, trueLabel: 'True', falseLabel: 'False' },
      { id: 's2', text: 'Energy storage solutions like LFP batteries are unnecessary because solar panels generate steady power 24/7.', correct: false, trueLabel: 'True', falseLabel: 'False' },
      { id: 's3', text: 'AI-driven smart grids assist in balancing power supply and demand fluctuations.', correct: true, trueLabel: 'True', falseLabel: 'False' }
    ],
    explanation: 'Statement 1 and 3 are True based on the text. Statement 2 is False because renewable sources are intermittent and strictly require storage systems.',
    topic: 'True / False Verification Table',
    difficulty: 'Mudah'
  },
  {
    id: 4,
    readingText: '**Passage 1 (Questions 1–5)**\n\nThe transition toward renewable energy is rapidly accelerating worldwide, driven by the imperative to curb greenhouse gas emissions and combat catastrophic climate change. Among various alternatives, solar photovoltaics (PV) and offshore wind turbines have witnessed the most dramatic cost reductions over the past decade. Innovative bifacial solar panels, which generate power from both sides by absorbing reflected light from the ground, have boosted energy efficiency by up to 25% compared to traditional single-sided modules.\n\nHowever, the intermittent nature of solar irradiance and wind velocity presents serious technical challenges for grid stability. Without large-scale energy storage systems, such as lithium-iron-phosphate (LFP) batteries and pumped-storage hydroelectricity, excess energy generated during peak hours cannot be effectively dispatched during periods of high demand. Consequently, modernizing power distribution infrastructure and deploying AI-driven smart grids are crucial steps to maintain supply-demand equilibrium.',
    text: 'What will most likely happen if a country expands its solar energy generation without investing in battery storage or grid modernization?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'The electrical grid will face severe blackouts and instability during peak evening hours.', correct: true },
      { id: 'B', text: 'The sun will shine continuously throughout the night.' },
      { id: 'C', text: 'The cost of coal and gas power will drop to zero immediately.' },
      { id: 'D', text: 'Solar panels will automatically store surplus electricity internally.' },
      { id: 'E', text: 'Electricity consumption will permanently stop.' }
    ],
    correctAnswer: 'A',
    explanation: 'Due to intermittency, lacking battery storage leads to instability and inability to supply power during evening peak hours.',
    topic: 'Logical Inference & Problem-Solving',
    difficulty: 'Sedang'
  },
  {
    id: 5,
    readingText: '**Passage 1 (Questions 1–5)**\n\nThe transition toward renewable energy is rapidly accelerating worldwide, driven by the imperative to curb greenhouse gas emissions and combat catastrophic climate change. Among various alternatives, solar photovoltaics (PV) and offshore wind turbines have witnessed the most dramatic cost reductions over the past decade. Innovative bifacial solar panels, which generate power from both sides by absorbing reflected light from the ground, have boosted energy efficiency by up to 25% compared to traditional single-sided modules.\n\nHowever, the intermittent nature of solar irradiance and wind velocity presents serious technical challenges for grid stability. Without large-scale energy storage systems, such as lithium-iron-phosphate (LFP) batteries and pumped-storage hydroelectricity, excess energy generated during peak hours cannot be effectively dispatched during periods of high demand. Consequently, modernizing power distribution infrastructure and deploying AI-driven smart grids are crucial steps to maintain supply-demand equilibrium.',
    text: 'Which technologies are mentioned as viable storage solutions for renewable energy? (Select all that apply)',
    type: 'multiple-complex',
    options: [
      { id: 'A', text: 'Lithium-iron-phosphate (LFP) batteries', correct: true },
      { id: 'B', text: 'Pumped-storage hydroelectricity', correct: true },
      { id: 'C', text: 'Diesel generators running continuously' }
    ],
    correctAnswer: ['A', 'B'],
    explanation: 'The passage explicitly lists LFP batteries and pumped-storage hydroelectricity.',
    topic: 'Complex Multiple Choice (Reading Identification)',
    difficulty: 'Sedang'
  },
  {
    id: 6,
    readingText: '**Passage 2 (Questions 6–10)**\n\nUrbanization and habitat fragmentation are severely disrupting migratory bird corridors across continents. Light pollution in metropolitan skylines disorients nocturnal migrants, causing fatal building collisions that claim hundreds of millions of avian lives annually. Furthermore, glass facades on high-rise structures create deceptive reflections of foliage and sky, confusing birds into flying at high speeds directly into transparent barriers.\n\nIn response to this ecological crisis, architects and conservationists are pioneering "bird-friendly" architectural designs. Incorporating fritted glass with subtle ultraviolet patterns—which are clearly perceptible to avian vision but virtually invisible to human eyes—has proven to reduce bird strikes by more than 80%. Additionally, "Lights Out" municipal initiatives during peak spring and autumn migration seasons have demonstrated immediate benefits in safely guiding flocks through illuminated urban flyways.',
    text: 'According to Passage 2, why do glass facades on skyscrapers cause frequent bird collisions?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'They emit ultrasonic frequencies that attract migratory flocks.' },
      { id: 'B', text: 'They reflect images of trees and sky, creating the illusion of an open pathway.', correct: true },
      { id: 'C', text: 'They radiate excessive thermal heat during nighttime.' },
      { id: 'D', text: 'They are colored in shades that provoke territorial bird attacks.' },
      { id: 'E', text: 'They are built across natural nesting trees.' }
    ],
    correctAnswer: 'B',
    explanation: 'Paragraph 1 explains: "...glass facades on high-rise structures create deceptive reflections of foliage and sky, confusing birds into flying at high speeds directly into transparent barriers."',
    topic: 'Cause and Effect in Informational Text',
    difficulty: 'Mudah'
  },
  {
    id: 7,
    readingText: '**Passage 2 (Questions 6–10)**\n\nUrbanization and habitat fragmentation are severely disrupting migratory bird corridors across continents. Light pollution in metropolitan skylines disorients nocturnal migrants, causing fatal building collisions that claim hundreds of millions of avian lives annually. Furthermore, glass facades on high-rise structures create deceptive reflections of foliage and sky, confusing birds into flying at high speeds directly into transparent barriers.\n\nIn response to this ecological crisis, architects and conservationists are pioneering "bird-friendly" architectural designs. Incorporating fritted glass with subtle ultraviolet patterns—which are clearly perceptible to avian vision but virtually invisible to human eyes—has proven to reduce bird strikes by more than 80%. Additionally, "Lights Out" municipal initiatives during peak spring and autumn migration seasons have demonstrated immediate benefits in safely guiding flocks through illuminated urban flyways.',
    text: 'How does ultraviolet-patterned fritted glass help protect birds without disrupting human aesthetics?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'It creates loud sounds whenever birds approach.' },
      { id: 'B', text: 'It is easily seen by birds due to their UV vision while remaining almost invisible to human eyes.', correct: true },
      { id: 'C', text: 'It completely blackouts the entire building from inside.' },
      { id: 'D', text: 'It transforms glass into flexible rubber barriers.' },
      { id: 'E', text: 'It reflects sunlight away from human observers.' }
    ],
    correctAnswer: 'B',
    explanation: 'Paragraph 2 highlights: "...subtle ultraviolet patterns—which are clearly perceptible to avian vision but virtually invisible to human eyes..."',
    topic: 'Detail Comprehension',
    difficulty: 'Mudah'
  },
  {
    id: 8,
    readingText: '**Passage 2 (Questions 6–10)**\n\nUrbanization and habitat fragmentation are severely disrupting migratory bird corridors across continents. Light pollution in metropolitan skylines disorients nocturnal migrants, causing fatal building collisions that claim hundreds of millions of avian lives annually. Furthermore, glass facades on high-rise structures create deceptive reflections of foliage and sky, confusing birds into flying at high speeds directly into transparent barriers.\n\nIn response to this ecological crisis, architects and conservationists are pioneering "bird-friendly" architectural designs. Incorporating fritted glass with subtle ultraviolet patterns—which are clearly perceptible to avian vision but virtually invisible to human eyes—has proven to reduce bird strikes by more than 80%. Additionally, "Lights Out" municipal initiatives during peak spring and autumn migration seasons have demonstrated immediate benefits in safely guiding flocks through illuminated urban flyways.',
    text: 'The author\'s tone toward bird-friendly architecture in Passage 2 can be best characterized as...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Dismissive and cynical' },
      { id: 'B', text: 'Supportive and constructive', correct: true },
      { id: 'C', text: 'Indifferent and detached' },
      { id: 'D', text: 'Aggressive and hostile' },
      { id: 'E', text: 'Skeptical and dubious' }
    ],
    correctAnswer: 'B',
    explanation: 'The author views bird-friendly designs as positive, proven solutions to an urgent ecological crisis.',
    topic: 'Tone and Attitude Analysis',
    difficulty: 'Sedang'
  },
  {
    id: 9,
    readingText: '**Passage 2 (Questions 6–10)**\n\nUrbanization and habitat fragmentation are severely disrupting migratory bird corridors across continents. Light pollution in metropolitan skylines disorients nocturnal migrants, causing fatal building collisions that claim hundreds of millions of avian lives annually. Furthermore, glass facades on high-rise structures create deceptive reflections of foliage and sky, confusing birds into flying at high speeds directly into transparent barriers.\n\nIn response to this ecological crisis, architects and conservationists are pioneering "bird-friendly" architectural designs. Incorporating fritted glass with subtle ultraviolet patterns—which are clearly perceptible to avian vision but virtually invisible to human eyes—has proven to reduce bird strikes by more than 80%. Additionally, "Lights Out" municipal initiatives during peak spring and autumn migration seasons have demonstrated immediate benefits in safely guiding flocks through illuminated urban flyways.',
    text: 'Determine whether the following statements are True or False:',
    type: 'true-false-table',
    statements: [
      { id: 's1', text: 'Light pollution primarily disorients daytime migratory birds.', correct: false, trueLabel: 'True', falseLabel: 'False' },
      { id: 's2', text: 'UV-patterned fritted glass has been shown to reduce bird collisions by over 80%.', correct: true, trueLabel: 'True', falseLabel: 'False' },
      { id: 's3', text: '"Lights Out" initiatives are implemented during peak spring and autumn migration seasons.', correct: true, trueLabel: 'True', falseLabel: 'False' }
    ],
    explanation: 'Statement 1 is False (nocturnal/nighttime migrants are affected). Statements 2 and 3 are True.',
    topic: 'Fact Checking Table',
    difficulty: 'Mudah'
  },
  {
    id: 10,
    text: 'Choose the sentence that contains an error in subject-verb agreement:',
    type: 'multiple',
    options: [
      { id: 'A', text: 'The collection of rare antique books was sold at the auction.' },
      { id: 'B', text: 'Either the supervisor or the researchers is responsible for the laboratory results.', correct: true },
      { id: 'C', text: 'Every student in the seminar has received the syllabus.' },
      { id: 'D', text: 'Both biology and chemistry require rigorous experimental verification.' },
      { id: 'E', text: 'Neither the teacher nor the students were present in the hall.' }
    ],
    correctAnswer: 'B',
    explanation: 'In "Either ... or ...", the verb agrees with the closer subject ("researchers" is plural, so it should be "are responsible", not "is responsible").',
    topic: 'Grammar: Subject-Verb Agreement',
    difficulty: 'Sedang'
  },
  {
    id: 11,
    readingText: '**Passage 3 (Questions 11–15)**\n\nThe microbiome residing within the human gastrointestinal tract is increasingly recognized as a fundamental pillar of overall physiological and cognitive well-being. Comprising trillions of symbiotic microorganisms, this complex ecosystem plays an indispensable role in nutrient synthesis, immune system modulation, and neurotransmitter regulation through the "gut-brain axis". Approximately 90% of the body\'s serotonin—a key neurotransmitter governing mood, sleep, and emotional stability—is synthesized in the gut.\n\nEmerging clinical research indicates that dysbiosis, an imbalance in gut microbial diversity caused by ultra-processed diets, chronic psychological stress, and overuse of broad-spectrum antibiotics, is closely linked to metabolic disorders, systemic inflammation, and even depressive symptoms. Consequently, incorporating dietary fiber, prebiotic fermented foods, and targeted lifestyle interventions has gained traction as a promising holistic therapeutic paradigm.',
    text: 'What percentage of the body\'s serotonin is synthesized in the gut according to Passage 3?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'About 25%' },
      { id: 'B', text: 'About 50%' },
      { id: 'C', text: 'About 75%' },
      { id: 'D', text: 'Approximately 90%', correct: true },
      { id: 'E', text: '100%' }
    ],
    correctAnswer: 'D',
    explanation: 'The passage explicitly mentions: "Approximately 90% of the body\'s serotonin... is synthesized in the gut."',
    topic: 'Direct Factual Retrieval',
    difficulty: 'Mudah'
  },
  {
    id: 12,
    readingText: '**Passage 3 (Questions 11–15)**\n\nThe microbiome residing within the human gastrointestinal tract is increasingly recognized as a fundamental pillar of overall physiological and cognitive well-being. Comprising trillions of symbiotic microorganisms, this complex ecosystem plays an indispensable role in nutrient synthesis, immune system modulation, and neurotransmitter regulation through the "gut-brain axis". Approximately 90% of the body\'s serotonin—a key neurotransmitter governing mood, sleep, and emotional stability—is synthesized in the gut.\n\nEmerging clinical research indicates that dysbiosis, an imbalance in gut microbial diversity caused by ultra-processed diets, chronic psychological stress, and overuse of broad-spectrum antibiotics, is closely linked to metabolic disorders, systemic inflammation, and even depressive symptoms. Consequently, incorporating dietary fiber, prebiotic fermented foods, and targeted lifestyle interventions has gained traction as a promising holistic therapeutic paradigm.',
    text: 'Which of the following factors can cause **dysbiosis** according to the passage?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Consuming organic fruits and vegetables' },
      { id: 'B', text: 'Ultra-processed diets, chronic stress, and overuse of broad-spectrum antibiotics', correct: true },
      { id: 'C', text: 'Regular aerobic exercise and adequate sleep' },
      { id: 'D', text: 'Drinking purified mineral water' },
      { id: 'E', text: 'Meditation and yoga practices' }
    ],
    correctAnswer: 'B',
    explanation: 'Paragraph 2 lists: "...ultra-processed diets, chronic psychological stress, and overuse of broad-spectrum antibiotics..." as causes of dysbiosis.',
    topic: 'Detail Comprehension',
    difficulty: 'Mudah'
  },
  {
    id: 13,
    readingText: '**Passage 3 (Questions 11–15)**\n\nThe microbiome residing within the human gastrointestinal tract is increasingly recognized as a fundamental pillar of overall physiological and cognitive well-being. Comprising trillions of symbiotic microorganisms, this complex ecosystem plays an indispensable role in nutrient synthesis, immune system modulation, and neurotransmitter regulation through the "gut-brain axis". Approximately 90% of the body\'s serotonin—a key neurotransmitter governing mood, sleep, and emotional stability—is synthesized in the gut.\n\nEmerging clinical research indicates that dysbiosis, an imbalance in gut microbial diversity caused by ultra-processed diets, chronic psychological stress, and overuse of broad-spectrum antibiotics, is closely linked to metabolic disorders, systemic inflammation, and even depressive symptoms. Consequently, incorporating dietary fiber, prebiotic fermented foods, and targeted lifestyle interventions has gained traction as a promising holistic therapeutic paradigm.',
    text: 'The primary purpose of Passage 3 is to...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Demonstrate how to manufacture synthetic antibiotics.' },
      { id: 'B', text: 'Explain the critical role of gut microbiome in physical and mental health and discuss causes and remedies for microbial imbalance.', correct: true },
      { id: 'C', text: 'Argue that brain health is completely independent of digestive nutrition.' },
      { id: 'D', text: 'Warn consumers against eating any fermented products.' },
      { id: 'E', text: 'Advocate for surgical removal of gastrointestinal bacteria.' }
    ],
    correctAnswer: 'B',
    explanation: 'The passage highlights the gut-brain axis, serotonin production, dysbiosis causes, and dietary remedies.',
    topic: 'Main Idea & Author Purpose',
    difficulty: 'Sedang'
  },
  {
    id: 14,
    readingText: '**Passage 3 (Questions 11–15)**\n\nThe microbiome residing within the human gastrointestinal tract is increasingly recognized as a fundamental pillar of overall physiological and cognitive well-being. Comprising trillions of symbiotic microorganisms, this complex ecosystem plays an indispensable role in nutrient synthesis, immune system modulation, and neurotransmitter regulation through the "gut-brain axis". Approximately 90% of the body\'s serotonin—a key neurotransmitter governing mood, sleep, and emotional stability—is synthesized in the gut.\n\nEmerging clinical research indicates that dysbiosis, an imbalance in gut microbial diversity caused by ultra-processed diets, chronic psychological stress, and overuse of broad-spectrum antibiotics, is closely linked to metabolic disorders, systemic inflammation, and even depressive symptoms. Consequently, incorporating dietary fiber, prebiotic fermented foods, and targeted lifestyle interventions has gained traction as a promising holistic therapeutic paradigm.',
    text: 'Determine whether each statement is True or False:',
    type: 'true-false-table',
    statements: [
      { id: 's1', text: 'The gut-brain axis connects intestinal health with cognitive and emotional regulation.', correct: true, trueLabel: 'True', falseLabel: 'False' },
      { id: 's2', text: 'Serotonin is solely responsible for muscle contractions in limbs.', correct: false, trueLabel: 'True', falseLabel: 'False' },
      { id: 's3', text: 'Fermented foods and prebiotic dietary fibers support healthy gut microbiome balance.', correct: true, trueLabel: 'True', falseLabel: 'False' }
    ],
    explanation: 'Statement 1 and 3 are True. Statement 2 is False because serotonin primarily regulates mood, sleep, and emotional stability.',
    topic: 'Verification Table',
    difficulty: 'Mudah'
  },
  {
    id: 15,
    text: 'Complete the sentence with the most appropriate transition word:\n"The economic forecast was grim; (...), the tech startup managed to secure record venture funding due to its groundbreaking patents."',
    type: 'multiple',
    options: [
      { id: 'A', text: 'furthermore' },
      { id: 'B', text: 'nevertheless', correct: true },
      { id: 'C', text: 'consequently' },
      { id: 'D', text: 'similarly' },
      { id: 'E', text: 'for example' }
    ],
    correctAnswer: 'B',
    explanation: '"Nevertheless" expresses contrast (despite the grim forecast, the startup secured funding).',
    topic: 'Sentence Connectors & Discourse Markers',
    difficulty: 'Mudah'
  },
  {
    id: 16,
    text: 'Identify the word with the **closest meaning** to the underlined word:\n"The scientist presented a *meticulous* record of the clinical trials, leaving no detail unexamined."',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Careless' },
      { id: 'B', text: 'Thorough and precise', correct: true },
      { id: 'C', text: 'Hasty' },
      { id: 'D', text: 'Superficial' },
      { id: 'E', text: 'Ambiguous' }
    ],
    correctAnswer: 'B',
    explanation: '"Meticulous" means showing great attention to detail; very careful and precise.',
    topic: 'Vocabulary & Synonyms',
    difficulty: 'Mudah'
  },
  {
    id: 17,
    text: 'Which sentence uses the correct passive voice construction?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'The ancient manuscript was discovered by archeologists in a hidden cave.', correct: true },
      { id: 'B', text: 'The ancient manuscript discovered archeologists in a hidden cave.' },
      { id: 'C', text: 'Archeologists was discovering the ancient manuscript.' },
      { id: 'D', text: 'The ancient manuscript were discover by archeologists.' },
      { id: 'E', text: 'In a hidden cave was discovering the manuscript.' }
    ],
    correctAnswer: 'A',
    explanation: 'Subject ("The ancient manuscript") + was + past participle ("discovered") + by agent ("archeologists").',
    topic: 'Grammar: Passive Voice',
    difficulty: 'Mudah'
  },
  {
    id: 18,
    text: 'Choose the correct conditional form:\n"If the government (...) earlier intervention policies, the inflation rate would not have surged so dramatically last year."',
    type: 'multiple',
    options: [
      { id: 'A', text: 'implements' },
      { id: 'B', text: 'implemented' },
      { id: 'C', text: 'had implemented', correct: true },
      { id: 'D', text: 'has implemented' },
      { id: 'E', text: 'would implement' }
    ],
    correctAnswer: 'C',
    explanation: 'Third Conditional (unreal past): If + past perfect ("had implemented"), would have + past participle ("would not have surged").',
    topic: 'Grammar: Conditionals',
    difficulty: 'Sedang'
  },
  {
    id: 19,
    text: 'What does the idiom **"bite the bullet"** mean in professional or daily contexts?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'To eat a very tough meal' },
      { id: 'B', text: 'To endure an inevitable, painful or difficult situation with courage', correct: true },
      { id: 'C', text: 'To shoot a target accurately' },
      { id: 'D', text: 'To avoid making decisions' },
      { id: 'E', text: 'To argue angrily with someone' }
    ],
    correctAnswer: 'B',
    explanation: '"Bite the bullet" means to face a difficult situation with fortitude and resolve.',
    topic: 'Idioms and Figurative Language',
    difficulty: 'Mudah'
  },
  {
    id: 20,
    text: 'Select the option that correctly rephrases the following indirect speech:\n*She asked me, "Where did you purchase this vintage timepiece?"*',
    type: 'multiple',
    options: [
      { id: 'A', text: 'She asked me where I had purchased that vintage timepiece.', correct: true },
      { id: 'B', text: 'She asked me where did I purchase this vintage timepiece.' },
      { id: 'C', text: 'She asked me where I purchase that vintage timepiece.' },
      { id: 'D', text: 'She asked me where have I purchased this vintage timepiece.' },
      { id: 'E', text: 'She asked me where had I purchased that vintage timepiece.' }
    ],
    correctAnswer: 'A',
    explanation: 'In indirect wh-questions, word order is statement format (subject + verb: "I had purchased"), simple past becomes past perfect ("had purchased"), and demonstrative "this" changes to "that".',
    topic: 'Grammar: Reported Speech',
    difficulty: 'Sedang'
  }
];
