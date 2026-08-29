import { UtbkQuestion } from '../types';

export const literasiInggrisTryoutData: UtbkQuestion[] = [
  {
    id: 1,
    readingText: 'Deep-sea hydrothermal vents, first discovered in 1977 along the Galápagos Rift, represent some of the most extreme environments on Earth. Discharging mineral-laden fluids at temperatures exceeding 400°C into pitch-black waters under immense hydrostatic pressure, these vents support thriving ecosystems entirely independent of solar energy. Instead of photosynthesis, the foundation of this food web is chemosynthesis, whereby specialized extremophile bacteria oxidize hydrogen sulfide and methane to synthesize organic compounds. This discovery profoundly revolutionized biological understanding of the physical boundaries of life and fueled astrobiological hypotheses regarding potential life in the subsurface oceans of icy moons such as Europa and Enceladus.',
    text: 'According to the passage, what process forms the biological basis of ecosystems surrounding hydrothermal vents?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Photosynthesis powered by ambient bioluminescence' },
      { id: 'B', text: 'Chemosynthesis carried out by extremophile bacteria oxidizing sulfur compounds and methane', correct: true },
      { id: 'C', text: 'Radiotrophic synthesis from geothermal uranium decay' },
      { id: 'D', text: 'Atmospheric carbon absorption through surface ocean currents' },
      { id: 'E', text: 'Passive decomposition of organic matter falling from upper epipelagic zones' }
    ],
    correctAnswer: 'B',
    explanation: 'The passage explicitly states: "Instead of photosynthesis, the foundation of this food web is chemosynthesis, whereby specialized extremophile bacteria oxidize hydrogen sulfide and methane to synthesize organic compounds."',
    topic: 'Direct Factual Understanding in Scientific English',
    difficulty: 'Mudah'
  },
  {
    id: 2,
    readingText: 'Deep-sea hydrothermal vents, first discovered in 1977 along the Galápagos Rift, represent some of the most extreme environments on Earth. Discharging mineral-laden fluids at temperatures exceeding 400°C into pitch-black waters under immense hydrostatic pressure, these vents support thriving ecosystems entirely independent of solar energy. Instead of photosynthesis, the foundation of this food web is chemosynthesis, whereby specialized extremophile bacteria oxidize hydrogen sulfide and methane to synthesize organic compounds. This discovery profoundly revolutionized biological understanding of the physical boundaries of life and fueled astrobiological hypotheses regarding potential life in the subsurface oceans of icy moons such as Europa and Enceladus.',
    text: 'The author mentions Europa and Enceladus in order to...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Demonstrate that deep-sea mining is currently expanding to celestial bodies' },
      { id: 'B', text: 'Illustrate how terrestrial extremophile research informs the search for extraterrestrial life in icy ocean worlds', correct: true },
      { id: 'C', text: 'Contrast the temperature of Martian craters with the Galápagos Rift' },
      { id: 'D', text: 'Argue that photosynthesis is universally superior to chemosynthesis' },
      { id: 'E', text: 'Prove that humanity originated from icy oceanic satellites' }
    ],
    correctAnswer: 'B',
    explanation: 'The mention of Europa and Enceladus connects hydrothermal chemosynthesis with astrobiological hypotheses investigating whether life can exist in extraterrestrial subsurface oceans devoid of sunlight.',
    topic: 'Author’s Rhetorical Purpose',
    difficulty: 'Sedang'
  },
  {
    id: 3,
    readingText: 'The concept of the "circular economy" proposes an industrial system that is restorative or regenerative by intention and design. It replaces the end-of-life concept with restoration, shifts towards the use of renewable energy, eliminates the use of toxic chemicals that impair reuse and return to the biosphere, and aims for the elimination of waste through superior design of materials, products, systems, and business models. In contrast to the traditional "take-make-dispose" linear model, circularity decouples economic growth from the consumption of finite natural resources.',
    text: 'The word **decouples** in the last sentence is closest in meaning to...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Separates or disconnects', correct: true },
      { id: 'B', text: 'Accelerates or speeds up' },
      { id: 'C', text: 'Combines or merges' },
      { id: 'D', text: 'Complicates or hinders' },
      { id: 'E', text: 'Subsidizes or funds' }
    ],
    correctAnswer: 'A',
    explanation: '"Decouples" means to separate, disconnect, or disassociate one entity from another (in this context, separating economic growth from resource depletion).',
    topic: 'Vocabulary in Context',
    difficulty: 'Mudah'
  },
  {
    id: 4,
    readingText: 'Cognitive scientists have long investigated the neurological impact of bilingualism. Structural neuroimaging reveals that individuals who consistently communicate in two or more languages exhibit increased gray matter density in the anterior cingulate cortex and left inferior parietal cortex. Furthermore, lifelong bilingualism has been shown to bolster "cognitive reserve," effectively delaying the clinical onset of neurodegenerative symptoms in Alzheimer’s disease by an average of four to five years compared to monolingual counterparts.',
    text: 'What can be inferred about bilingual individuals based on the text?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'They are completely immune to developing any neurodegenerative disorders.' },
      { id: 'B', text: 'Their sustained multilingual mental exercise enhances brain plasticity and cognitive resilience against age-related decline.', correct: true },
      { id: 'C', text: 'They lose their native language fluency as they age.' },
      { id: 'D', text: 'They require fewer hours of sleep per night than monolinguals.' },
      { id: 'E', text: 'Their spatial intelligence is significantly weaker than their verbal fluency.' }
    ],
    correctAnswer: 'B',
    explanation: 'The passage highlights increased gray matter density and delayed onset of Alzheimer’s symptoms by 4–5 years, implying enhanced cognitive reserve and neuroplastic resilience against degeneration.',
    topic: 'Inference & Logical Deduction',
    difficulty: 'Sedang'
  },
  {
    id: 5,
    readingText: 'Microplastics—synthetic polymer particles smaller than five millimeters in diameter—have ubiquitously permeated terrestrial and marine food webs. Because of their hydrophobic surfaces, microplastics readily adsorb persistent organic pollutants (POPs) such as polychlorinated biphenyls (PCBs) and dioxins from aquatic environments. When ingested by filter feeders like mussels and zooplankton, these toxins can biomagnify across trophic levels, posing bioaccumulative toxicological risks to apex predators and human consumers.',
    text: 'Why are microplastics particularly hazardous to aquatic trophic webs beyond their physical presence?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'They actively dissolve into pure heavy metals upon contact with sunlight.' },
      { id: 'B', text: 'Their hydrophobic nature enables them to concentrate environmental toxic pollutants and biomagnify up the food chain.', correct: true },
      { id: 'C', text: 'They rapidly generate radioactive isotopes in freshwater habitats.' },
      { id: 'D', text: 'They prevent phytoplankton from undergoing natural cell division.' },
      { id: 'E', text: 'They transform herbivorous marine animals into carnivorous apex predators.' }
    ],
    correctAnswer: 'B',
    explanation: 'The text highlights that their hydrophobic surfaces absorb POPs (PCBs/dioxins) which then biomagnify through trophic levels, amplifying toxicological risks.',
    topic: 'Detailed Passage Comprehension',
    difficulty: 'Sedang'
  },
  {
    id: 6,
    readingText: 'Quantum computing fundamentally diverges from classical computing by utilizing quantum bits, or qubits. Unlike classical bits that are constrained to binary states of either 0 or 1, qubits exploit the principles of superposition and entanglement. This allows quantum processors to evaluate vast computational search spaces simultaneously, offering exponential speedups for specialized problems such as cryptographic factorization, molecular simulation, and complex combinatorial optimization.',
    text: 'What is the main topic of the passage?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'The principles and distinctive computational advantages of quantum computing compared to classical systems', correct: true },
      { id: 'B', text: 'The manufacturing cost of silicon chips in classical computers' },
      { id: 'C', text: 'The history of mechanical calculating machines in the 19th century' },
      { id: 'D', text: 'The environmental hazards of quantum cooling refrigerators' },
      { id: 'E', text: 'How classical binary code is permanently replacing quantum software' }
    ],
    correctAnswer: 'A',
    explanation: 'The entire text explains what qubits are (superposition & entanglement) and how they provide exponential computational advantages over classical binary architecture.',
    topic: 'Main Idea Identification',
    difficulty: 'Mudah'
  },
  {
    id: 7,
    readingText: 'Urban green spaces—such as municipal parks, vertical gardens, and bioswales—provide vital ecosystem services in modern metropolitan areas. Besides mitigating the urban heat island effect through evapotranspiration and shade, these green corridors facilitate urban stormwater management by enhancing soil permeability. Additionally, empirical studies in environmental psychology indicate that regular exposure to verdant greenery reduces salivary cortisol levels and alleviates symptoms of urban mental fatigue.',
    text: 'All of the following benefits of urban green spaces are mentioned in the passage **EXCEPT**...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Cooling ambient city temperatures via evapotranspiration' },
      { id: 'B', text: 'Mitigating stormwater runoff by improving soil permeability' },
      { id: 'C', text: 'Lowering physiological stress indicators like cortisol levels' },
      { id: 'D', text: 'Completely eliminating the need for municipal wastewater treatment facilities', correct: true },
      { id: 'E', text: 'Alleviating urban mental fatigue' }
    ],
    correctAnswer: 'D',
    explanation: 'The passage mentions stormwater management, heat mitigation, cortisol reduction, and mental fatigue alleviation. It never claims that wastewater treatment facilities are completely eliminated.',
    topic: 'Negative Factual Question (EXCEPT)',
    difficulty: 'Mudah'
  },
  {
    id: 8,
    readingText: 'The James Webb Space Telescope (JWST), operating at the Second Sun-Earth Lagrange Point (L2), has revolutionized infrared astronomy. Its 6.5-meter gold-coated beryllium primary mirror and cryogenically cooled Mid-Infrared Instrument (MIRI) allow astronomers to peer through obscuring cosmic dust clouds, detecting the faint redshifted starlight from galaxies that formed less than 400 million years after the Big Bang.',
    text: 'The primary advantage of JWST’s infrared instruments described in the text is their ability to...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Transmit instant radio signals to civilizations outside the Milky Way' },
      { id: 'B', text: 'Penetrate cosmic dust clouds and capture faint redshifted light from the earliest primordial galaxies', correct: true },
      { id: 'C', text: 'Capture optical photographs of planets inside the solar system only' },
      { id: 'D', text: 'Deflect incoming solar flares away from Earth’s telecommunication grid' },
      { id: 'E', text: 'Generate artificial gravitational waves in outer space' }
    ],
    correctAnswer: 'B',
    explanation: 'The passage explicitly notes that the infrared mirrors and MIRI allow peering through dust clouds to detect faint redshifted starlight from galaxies formed shortly after the Big Bang.',
    topic: 'Passage Specifics & Technical Science Reading',
    difficulty: 'Mudah'
  },
  {
    id: 9,
    readingText: 'Autonomous electric freight trains are emerging as a linchpin of sustainable continental logistics. Rail freight produces approximately 75% fewer greenhouse gas emissions per ton-kilometer compared to heavy-duty diesel trucks. By deploying autonomous platooning and automated predictive track switching, rail operators can optimize kinetic braking regeneration and drastically reduce supply chain delivery bottlenecks.',
    text: 'The author’s tone toward autonomous electric freight rail can best be described as...',
    type: 'multiple',
    options: [
      { id: 'A', text: 'Skeptical and dismissive' },
      { id: 'B', text: 'Supportive and analytical', correct: true },
      { id: 'C', text: 'Hostile and confrontational' },
      { id: 'D', text: 'Ambivalent and indifferent' },
      { id: 'E', text: 'Nostalgic and regretful' }
    ],
    correctAnswer: 'B',
    explanation: 'The author presents factual data (75% lower emissions, kinetic regeneration, bottleneck reduction) in a constructive, objective, and supportive tone.',
    topic: 'Tone of the Author',
    difficulty: 'Sedang'
  },
  {
    id: 10,
    readingText: 'CRISPR-Cas9 gene editing has revolutionized molecular medicine by functioning as a set of programmable molecular scissors. By utilizing a guide RNA molecule matching a targeted DNA sequence, the Cas9 endonuclease introduces a double-strand break at a precise genomic locus. Cellular repair mechanisms then disable or substitute the problematic gene, presenting unprecedented therapeutic potential for hereditary diseases such as sickle cell anemia and cystic fibrosis.',
    text: 'What role does the **guide RNA** play in the CRISPR-Cas9 mechanism according to the text?',
    type: 'multiple',
    options: [
      { id: 'A', text: 'It directs the Cas9 enzyme to the precise target sequence in the DNA strand.', correct: true },
      { id: 'B', text: 'It acts as the physical scissors that cleaves the double helix' },
      { id: 'C', text: 'It provides the metabolic energy for cell division' },
      { id: 'D', text: 'It synthesizes hemoglobin for red blood cells' },
      { id: 'E', text: 'It destroys invading bacterial cell walls' }
    ],
    correctAnswer: 'A',
    explanation: 'The passage notes: "By utilizing a guide RNA molecule matching a targeted DNA sequence, the Cas9 endonuclease introduces a double-strand break at a precise genomic locus."',
    topic: 'Biological Process Reading Comprehension',
    difficulty: 'Mudah'
  }
];
