// 150 NCLEX-style CLINICAL APPLICATION questions
// Revised per professor guidance:
//   Prof. Visagamoorthi (Human Development): stages & milestones (gross/fine/social/speech),
//        developmental theories, nature vs. nurture.
//   Prof. Mohanan (Mobility): exemplars (OA, RA, hip fracture/replacement), the drug classes
//        for each, primary/secondary/tertiary prevention, the 6 P's.
//   Prof. Sapp (Thermoregulation): what drives thermoregulation, heat exhaustion vs. heat stroke,
//        hypothermia stages (mild/moderate/severe), malignant hyperthermia + dantrolene,
//        the 4 types of heat loss, and SMART implementation for hypo/hyperthermia.
// Emphasis is on APPLICATION: "What would the nurse do first / focus on / prioritize?"
// Sources: 11430_study_guide.docx, Human_Growth_And_Development.pptx, Mobility.pdf.
const QUESTION_BANK = [
  // ============================================================
  // HUMAN DEVELOPMENT  (ids 1-50)
  // ============================================================
  {
    "id": 1, "topic": "Human Development",
    "question": "A 6-month-old is brought in for a well-child visit. Which gross motor skill should the nurse expect the infant to have achieved?",
    "options": ["Sitting alone without support", "Sitting with support", "Walking a few steps", "Rolling from back to front only after 9 months"],
    "answer": 1,
    "rationale": "At 6 months an infant sits WITH support; sitting alone without support is expected at 7 months. Knowing milestone timing lets the nurse identify deviations."
  },
  {
    "id": 2, "topic": "Human Development",
    "question": "During a developmental screening, a 9-month-old picks up a small piece of cereal using the thumb and one finger. How should the nurse document this fine motor skill?",
    "options": ["Palmar grasp", "Pincer grasp", "Voluntary release", "Bidextrous transfer"],
    "answer": 1,
    "rationale": "The pincer grasp (thumb and one finger) is expected at about 9 months. Documenting milestones accurately supports early identification of delays."
  },
  {
    "id": 3, "topic": "Human Development",
    "question": "A parent reports their child says 'mama' and 'dada' with meaning. Based on speech milestones, the nurse estimates the child is at least what age?",
    "options": ["3 months", "6 months", "8 months", "12 months"],
    "answer": 2,
    "rationale": "Saying 'mama' and 'dada' occurs at about 8 months. Speech/language milestones help the nurse assess for expressive language delays."
  },
  {
    "id": 4, "topic": "Human Development",
    "question": "The nurse observes a 2-month-old smile responsively at the parent. Which type of milestone is the nurse assessing?",
    "options": ["Gross motor", "Fine motor", "Social/adaptive", "Speech and language"],
    "answer": 2,
    "rationale": "The social smile at 2 months is a social/adaptive milestone. The four milestone domains are gross motor, fine motor, social/adaptive, and speech/language."
  },
  {
    "id": 5, "topic": "Human Development",
    "question": "A guardian asks what their healthy 3-year-old should be able to do. Which response by the nurse reflects correct milestones?",
    "options": ["Copy a diamond and skip", "Ride a tricycle, copy a circle, and tell a story", "Copy a triangle and tie shoes", "Walk without support for the first time"],
    "answer": 1,
    "rationale": "At 3 years a child rides a tricycle (gross motor), copies a circle/builds a 9-cube tower (fine motor), and tells a story with good vocabulary (speech). A triangle is 5 years, a diamond 6 years."
  },
  {
    "id": 6, "topic": "Human Development",
    "question": "A 5-month-old grasps a rattle voluntarily with one hand but cannot yet transfer it between hands. The nurse recognizes transferring objects hand-to-hand is expected at what age?",
    "options": ["4 months", "5 months", "7 months", "9 months"],
    "answer": 2,
    "rationale": "Transferring objects from one hand to the other is a 7-month fine motor skill; voluntary one-hand grasp is 5 months. This progression is normal."
  },
  {
    "id": 7, "topic": "Human Development",
    "question": "A nurse caring for a hospitalized preschooler who says \"I'm sick because I was bad\" should FIRST:",
    "options": ["Correct the child sternly and explain germ theory in detail", "Provide simple, honest reassurance that illness is not a punishment and offer medical play", "Tell the parents to discipline the magical thinking", "Ignore the statement as unimportant"],
    "answer": 1,
    "rationale": "Preschoolers use magical thinking and may believe illness is punishment. The nurse's priority is simple, honest reassurance and therapeutic (medical) play, using non-threatening words."
  },
  {
    "id": 8, "topic": "Human Development",
    "question": "An adolescent refuses the clothing a parent bought and insists on dressing like peers. Applying Erikson, the nurse recognizes the teen is working through which stage, and responds how?",
    "options": ["Autonomy vs. shame; offer limited choices only", "Identity vs. role confusion; respect the need to form a self-identity", "Industry vs. inferiority; praise schoolwork", "Intimacy vs. isolation; encourage dating"],
    "answer": 1,
    "rationale": "Adolescents (12-20) are in identity vs. role confusion. The nurse supports developing self-identity, speaks directly to the teen, and respects privacy."
  },
  {
    "id": 9, "topic": "Human Development",
    "question": "A nurse plans care for a hospitalized toddler. Which intervention BEST supports the toddler's developmental stage of autonomy vs. shame and doubt?",
    "options": ["Make all care decisions to reduce the child's stress", "Offer simple choices such as 'the red cup or the blue cup' and allow a comfort object", "Give detailed scientific explanations of procedures", "Encourage peer visits to build friendships"],
    "answer": 1,
    "rationale": "Toddlers seek autonomy. Offering limited choices gives an illusion of control, and a comfort object eases separation anxiety."
  },
  {
    "id": 10, "topic": "Human Development",
    "question": "According to Piaget, a nurse using peek-a-boo with a 10-month-old is engaging which cognitive achievement?",
    "options": ["Conservation", "Object permanence", "Abstract reasoning", "Egocentrism"],
    "answer": 1,
    "rationale": "Object permanence (objects exist even when unseen) develops around 9 months in the sensorimotor stage, which is why peek-a-boo becomes engaging."
  },
  {
    "id": 11, "topic": "Human Development",
    "question": "A nursing student is explaining Freud's structures of personality. Which statement about the id is correct?",
    "options": ["It is the conscience that restrains behavior", "It is the reality component that judges situations", "It is the most primitive part, demanding immediate need gratification in infancy", "It develops last, in adolescence"],
    "answer": 2,
    "rationale": "The id is the most primitive part of personality, present in infancy; infants cannot wait and must have needs met immediately. The superego is the conscience; the ego is reality."
  },
  {
    "id": 12, "topic": "Human Development",
    "question": "Applying Erikson, which nursing action best supports an infant in the trust vs. mistrust stage?",
    "options": ["Encourage independent self-soothing without response", "Provide consistent, prompt, comforting care and allow parental presence", "Offer the infant simple choices", "Praise the infant's achievements"],
    "answer": 1,
    "rationale": "Trust vs. mistrust (0-18 months) is built through consistent, responsive caregiving. Prompt comfort and parental presence foster trust."
  },
  {
    "id": 13, "topic": "Human Development",
    "question": "A parent worries their child is 'behind.' The nurse explains that a true developmental delay is:",
    "options": ["Any milestone reached a week late", "A symptom, not a diagnosis, when a child fails a milestone met by 95% of same-age, same-gender peers", "Always permanent and untreatable", "The same as a temporary lag"],
    "answer": 1,
    "rationale": "A developmental delay is a symptom (not a diagnosis) that occurs when a child does not meet a milestone that 95% of same-age, same-gender peers meet. A temporary lag is not a delay."
  },
  {
    "id": 14, "topic": "Human Development",
    "question": "A nurse teaches parents about nature vs. nurture. Which example best illustrates a 'nurture' (environmental) influence on development?",
    "options": ["A child's eye color inherited from parents", "A child's height determined by genetics", "A stimulating, language-rich home environment improving vocabulary", "An inherited predisposition to a genetic disorder"],
    "answer": 2,
    "rationale": "Nurture refers to environmental influences. Providing a stimulating, language-rich environment (nurture) fosters cognitive and language growth, whereas eye color, height, and inherited disorders reflect nature (genetics)."
  },
  {
    "id": 15, "topic": "Human Development",
    "question": "Which scenario best demonstrates the interaction of BOTH nature and nurture on development?",
    "options": ["A child inherits a musical talent (nature) and develops it through lessons and practice (nurture)", "A child's blood type", "A reflexive knee-jerk response", "The number of chromosomes a child is born with"],
    "answer": 0,
    "rationale": "Development results from the interplay of genetics (nature - inherited talent) and environment (nurture - lessons and practice). This interaction shapes the child's outcomes."
  },
  {
    "id": 16, "topic": "Human Development",
    "question": "A nurse assessing cognitive development notes a 4-year-old believes their teddy bear has feelings. Which preoperational characteristic is this?",
    "options": ["Conservation", "Animism", "Object permanence", "Logical reasoning"],
    "answer": 1,
    "rationale": "Animism (attributing human/living qualities to inanimate objects) is characteristic of Piaget's preoperational stage (2-7 years), along with egocentrism."
  },
  {
    "id": 17, "topic": "Human Development",
    "question": "Using Kohlberg's theory, a school-age child who follows rules 'because it's the law and keeps order' is demonstrating which level of moral development?",
    "options": ["Preconventional", "Conventional", "Postconventional", "Amoral"],
    "answer": 1,
    "rationale": "The conventional level (school age to adult) involves conformity to social norms and maintaining social order. Preconventional is obedience to avoid punishment."
  },
  {
    "id": 18, "topic": "Human Development",
    "question": "A nurse applies Maslow's hierarchy to prioritize care for four patients. Who should be seen FIRST?",
    "options": ["A patient wanting to discuss discharge goals", "A patient reporting loneliness", "A patient with an oxygen saturation of 84% and labored breathing", "A patient asking for reassurance about safety"],
    "answer": 2,
    "rationale": "Physiological needs (airway, breathing, oxygenation) are the base of Maslow's hierarchy and take priority over safety, belonging, and self-actualization needs."
  },
  {
    "id": 19, "topic": "Human Development",
    "question": "A 15-month-old is expected to demonstrate which gross motor milestone?",
    "options": ["Sitting with support", "Walking sideways and backwards", "Riding a tricycle", "Standing on one leg"],
    "answer": 1,
    "rationale": "At 15 months a child walks sideways and backwards. Riding a tricycle is 3 years; standing on one leg is 4 years."
  },
  {
    "id": 20, "topic": "Human Development",
    "question": "The nurse is communicating with a school-age child (6-12 years) before a procedure. Which approach best fits this developmental stage?",
    "options": ["Use only nonverbal reassurance", "Give clear explanations with charts/pictures, allow questions, and praise effort", "Avoid all explanations to prevent fear", "Speak only to the parents"],
    "answer": 1,
    "rationale": "School-age children (industry vs. inferiority) need honesty, clear explanations, visual aids, opportunity to ask questions, and praise for effort."
  },
  {
    "id": 21, "topic": "Human Development",
    "question": "A 7-month-old resists when a toy is taken away, showing early negativism. The nurse documents this under which milestone domain?",
    "options": ["Gross motor", "Fine motor", "Social/adaptive", "Speech and language"],
    "answer": 2,
    "rationale": "The period of negativism (resisting things being taken away) at 7 months is a social/adaptive milestone."
  },
  {
    "id": 22, "topic": "Human Development",
    "question": "A nurse reviews milestones for a 12-month-old. Which finding would be an expected gross motor skill?",
    "options": ["Walks without support", "Stands without support briefly and may take a few steps", "Walks sideways and backwards", "Climbs stairs alternating feet"],
    "answer": 1,
    "rationale": "At 12 months a child stands without support for a few seconds and may take a few steps. Walking without support is 13 months."
  },
  {
    "id": 23, "topic": "Human Development",
    "question": "Which statement by a parent about their 2-year-old indicates correct understanding of expected development?",
    "options": ["My child should be able to copy a triangle", "My child should be able to turn a doorknob and combine two words", "My child should be able to ride a two-wheel bike", "My child should be able to tie shoelaces"],
    "answer": 1,
    "rationale": "A 2-year-old can turn a doorknob, build a tower of 6 cubes, and combine words into simple 2-word sentences. Copying a triangle (5 yr) and tying shoes are later skills."
  },
  {
    "id": 24, "topic": "Human Development",
    "question": "The nurse is caring for an older adult with a sudden onset of confusion over hours that fluctuates. What is the nurse's FIRST priority?",
    "options": ["Reassure the family this is normal aging", "Recognize possible delirium and assess for reversible causes such as infection, medications, or dehydration", "Document dementia and plan long-term placement", "Start antidepressant therapy"],
    "answer": 1,
    "rationale": "Acute, fluctuating confusion suggests delirium, which is usually reversible and needs immediate evaluation for causes (infection, medication effects, dehydration, hypoxia)."
  },
  {
    "id": 25, "topic": "Human Development",
    "question": "A nurse distinguishes depression from dementia in an older adult. Which finding points to depression?",
    "options": ["Gradual, irreversible memory loss over years", "Persistent sadness, hopelessness, social withdrawal, and appetite/sleep changes that are treatable", "Clouded consciousness with hallucinations over hours", "Progressive personality change with clear consciousness until late"],
    "answer": 1,
    "rationale": "Depression presents with sadness, hopelessness, withdrawal, and appetite/sleep changes; it is treatable/reversible and often underdiagnosed in older adults."
  },
  {
    "id": 26, "topic": "Human Development",
    "question": "To combat ageism when caring for older adults, the nurse should FIRST:",
    "options": ["Assume older adults cannot learn new information", "Examine their own attitudes and biases about aging", "Speak only to family members", "Limit teaching to written materials"],
    "answer": 1,
    "rationale": "Combating ageism begins with self-reflection: nurses assess their own attitudes and work toward a positive view of aging and older adults' needs."
  },
  {
    "id": 27, "topic": "Human Development",
    "question": "An older adult takes 10 medications prescribed by several providers. What is the nurse's priority action related to polypharmacy?",
    "options": ["Encourage the patient to add an OTC supplement", "Perform a thorough medication review and assess for drug interactions and adverse effects", "Assume all medications are necessary", "Double the doses for effectiveness"],
    "answer": 1,
    "rationale": "Polypharmacy increases interaction and adverse-effect risk. The priority is a complete medication review, assessing for interactions, adverse effects, and nonadherence."
  },
  {
    "id": 28, "topic": "Human Development",
    "question": "A nurse teaches a parent about the cephalocaudal principle. Which example is correct?",
    "options": ["A child gains hand control before trunk control", "A child controls the head before sitting and walking", "A child learns complex skills before simple ones", "Development stops at a fixed rate for all children"],
    "answer": 1,
    "rationale": "Cephalocaudal development proceeds head to toe: head control comes before sitting, which comes before walking."
  },
  {
    "id": 29, "topic": "Human Development",
    "question": "Which patient is in Erikson's generativity vs. stagnation stage, and what should care focus on?",
    "options": ["A 30-year-old; forming intimate relationships", "A 50-year-old; wellness evaluation, healthy habits, and routine screening", "A 16-year-old; identity formation", "An 80-year-old; life review"],
    "answer": 1,
    "rationale": "Middle adults (35-65) are in generativity vs. stagnation. Care focuses on lifestyle/wellness evaluation, forming positive health habits, and routine disease screening."
  },
  {
    "id": 30, "topic": "Human Development",
    "question": "A nurse cares for a hospitalized infant. Which action best addresses stranger and separation anxiety?",
    "options": ["Limit parental visits to reduce overstimulation", "Encourage parental presence, use a soft calm voice, gentle touch, and hold the infant when possible", "Provide detailed verbal instructions to the infant", "Place the infant in a separate quiet room alone"],
    "answer": 1,
    "rationale": "Infants experience stranger/separation anxiety. Parental presence and nonverbal reassurance (soft voice, gentle touch, holding) provide comfort and support bonding."
  },
  {
    "id": 31, "topic": "Human Development",
    "question": "A 4-month-old is assessed. Which fine motor skill is expected?",
    "options": ["Neat pincer grasp", "Grasps objects with both hands (bidextrous)", "Builds a tower of 2 cubes", "Voluntary release on command"],
    "answer": 1,
    "rationale": "At 4 months the infant grasps objects with both hands (bidextrous approach). Pincer grasp is 9 months; a 2-cube tower is 18 months."
  },
  {
    "id": 32, "topic": "Human Development",
    "question": "Which theory does a nurse apply when timing toilet training and offering a toddler choices to build independence?",
    "options": ["Freud's genital stage", "Erikson's autonomy vs. shame and doubt", "Kohlberg's postconventional level", "Piaget's formal operations"],
    "answer": 1,
    "rationale": "Toilet training and offering choices support Erikson's autonomy vs. shame and doubt (18 months-3 years), when toddlers develop independence."
  },
  {
    "id": 33, "topic": "Human Development",
    "question": "The nurse notes an infant lost head control that was previously present and is not meeting new milestones. What is the priority nursing action?",
    "options": ["Reassure the parent this is a normal temporary lag", "Recognize possible abnormal development (loss of an achieved milestone) and refer for further evaluation", "Advise waiting one year to reassess", "Document normal findings"],
    "answer": 1,
    "rationale": "Loss of a previously achieved milestone (regression) is a red flag for abnormal development and warrants prompt evaluation, not reassurance."
  },
  {
    "id": 34, "topic": "Human Development",
    "question": "A 3-year-old should demonstrate which social/adaptive milestone?",
    "options": ["Social smile", "Comes when called", "Says age and sex, identifies 3 basic colors, dry by night", "Dresses without supervision"],
    "answer": 2,
    "rationale": "At 3 years a child can state age and sex, identify 3 colors, and is usually dry at night. Dressing without supervision is a 5-year skill."
  },
  {
    "id": 35, "topic": "Human Development",
    "question": "Which is an example of a 'nature' influence when a nurse assesses a child's growth?",
    "options": ["Access to nutritious food", "An inherited genetic condition affecting growth", "Quality of the child's schooling", "Parental discipline style"],
    "answer": 1,
    "rationale": "Nature refers to genetic/biological factors such as inherited conditions. Nutrition, schooling, and parenting style are nurture (environmental) factors."
  },
  {
    "id": 36, "topic": "Human Development",
    "question": "A formal-operations-stage adolescent can do which cognitive task that a concrete-operational child cannot?",
    "options": ["Understand object permanence", "Perform abstract and hypothetical reasoning", "Recognize the parent's face", "Coordinate simple reflexes"],
    "answer": 1,
    "rationale": "Formal operations (11+ years) enable abstract thinking and hypothetical reasoning, plus moral/ethical reasoning. Concrete-operational children think logically only about concrete events."
  },
  {
    "id": 37, "topic": "Human Development",
    "question": "The nurse tailors patient education to the patient's developmental level. This practice reflects which principle?",
    "options": ["Treating all patients identically", "Using age-appropriate language and materials based on cognitive and developmental stage", "Teaching only families", "Avoiding written materials"],
    "answer": 1,
    "rationale": "Nurses integrate developmental theory by tailoring communication and education to the patient's cognitive and developmental level and health literacy."
  },
  {
    "id": 38, "topic": "Human Development",
    "question": "Which nursing responsibility is a priority for a preschooler (3-6 years)?",
    "options": ["Assess for suicide risk and confidentiality", "Address bedtime issues and enuresis, teach the child their address/phone number and stranger safety", "Provide detailed sex education", "Focus solely on peer group formation"],
    "answer": 1,
    "rationale": "Preschooler care addresses bedtime problems (night waking, enuresis), teaches address/phone and stranger safety, and encourages expression of feelings."
  },
  {
    "id": 39, "topic": "Human Development",
    "question": "An 18-month-old is assessed. Which speech/language finding is expected?",
    "options": ["Only vowel sounds", "Cooing", "Speaks at least 6 words / uses child jargon with ~10 words with meaning", "Tells a full story with long sentences"],
    "answer": 2,
    "rationale": "At 15-18 months a child uses jargon and about 10 words with meaning, speaking at least 6 words. Telling a story is a 3-year skill."
  },
  {
    "id": 40, "topic": "Human Development",
    "question": "Which patient statement reflects an older adult successfully resolving Erikson's ego integrity vs. despair stage?",
    "options": ["\"I have so many regrets and wasted my life.\"", "\"Looking back, I feel satisfied with the life I've lived.\"", "\"I need to prove myself through my work.\"", "\"I just want to fit in with everyone.\""],
    "answer": 1,
    "rationale": "Ego integrity vs. despair (65+) is resolved positively when the person reflects on life with satisfaction rather than regret (despair)."
  },
  {
    "id": 41, "topic": "Human Development",
    "question": "A nurse is assessing a 5-year-old's fine motor development. Which task should the child be able to perform?",
    "options": ["Copy a circle", "Copy a cross", "Copy a triangle", "Copy a diamond"],
    "answer": 2,
    "rationale": "A 5-year-old can copy a triangle. A circle/cross is 3 years, a cube 4 years, and a diamond 6 years."
  },
  {
    "id": 42, "topic": "Human Development",
    "question": "A nurse applies Freud's stages. Fixation in the oral stage (birth-18 months) may later present as:",
    "options": ["Rigid, orderly behavior", "Overeating, smoking, or nail biting", "Vanity and sexual dysfunction", "Same-sex friendship preference"],
    "answer": 1,
    "rationale": "Oral-stage fixation is associated with behaviors involving the mouth such as overeating, smoking, and nail biting."
  },
  {
    "id": 43, "topic": "Human Development",
    "question": "When assessing development, the nurse remembers development is orderly and sequential. Which statement reflects this principle?",
    "options": ["A child walks before gaining head control", "Each stage builds on the previous one", "Development occurs at exactly the same rate for every child", "Complex skills appear before simple ones"],
    "answer": 1,
    "rationale": "Development is orderly and sequential - each stage builds on the previous. It also proceeds simple to complex and is continuous but individualized in rate."
  },
  {
    "id": 44, "topic": "Human Development",
    "question": "A young adult (20-35) is seen in clinic. Applying Erikson, the nurse focuses health promotion on:",
    "options": ["Toilet training", "Forming healthy intimate relationships, employment stability, and work-life balance", "Life review and legacy", "Peer identity and school violence screening"],
    "answer": 1,
    "rationale": "Young adults are in intimacy vs. isolation. Focus includes healthy relationships, stable employment/finances, emotional well-being, and work-life balance."
  },
  {
    "id": 45, "topic": "Human Development",
    "question": "The nurse plans care for an older adult (65+). Which psychosocial concern should be assessed FIRST?",
    "options": ["Toilet-training readiness", "Loss related to retirement, reduced income, and social isolation", "Peer pressure", "School performance"],
    "answer": 1,
    "rationale": "Older adults face losses - retirement, reduced income, and social isolation (risk of depression). Assessing these psychosocial concerns is a priority along with safety and dignity."
  },
  {
    "id": 46, "topic": "Human Development",
    "question": "A nurse selects a developmental screening tool for a young child. Which tool is appropriate?",
    "options": ["Mini-Mental Status Examination", "The Denver II", "Menopause Rating Scale", "SPICES"],
    "answer": 1,
    "rationale": "The Denver II screens child development. The MMSE assesses adult cognition, MRS is for menopause, and SPICES is a geriatric assessment tool."
  },
  {
    "id": 47, "topic": "Human Development",
    "question": "Which condition would the nurse recognize as placing a child at risk for altered development?",
    "options": ["Meeting milestones early", "Autism spectrum disorder or a learning disability", "Consistent, responsive caregiving", "Adequate nutrition"],
    "answer": 1,
    "rationale": "Conditions such as ASD, ADHD, learning/intellectual disabilities, anxiety/mood disorders, and PTSD place children at risk for altered development."
  },
  {
    "id": 48, "topic": "Human Development",
    "question": "A concrete-operational child (7-11 years) demonstrates conservation. The nurse knows this means the child understands that:",
    "options": ["Objects exist when out of sight", "Quantity stays the same despite a change in appearance", "Others may have a different perspective for the first time", "Abstract hypothetical situations", ],
    "answer": 1,
    "rationale": "Conservation is understanding that quantity remains the same despite a change in shape or appearance - a hallmark of concrete operational thinking."
  },
  {
    "id": 49, "topic": "Human Development",
    "question": "A nurse teaches new parents that development is a continuous process. Which statement is accurate?",
    "options": ["All children develop at exactly the same pace", "Development is unique to each individual and the rate varies", "Development halts between milestone stages", "Later skills appear before earlier ones"],
    "answer": 1,
    "rationale": "Development is a continuous process that is unique to each individual; the rate of development varies from child to child."
  },
  {
    "id": 50, "topic": "Human Development",
    "question": "Which milestone domain is the nurse assessing when checking whether a 9-month-old imitates sounds?",
    "options": ["Gross motor", "Fine motor", "Speech and language", "Social/adaptive"],
    "answer": 2,
    "rationale": "Imitating sounds at 9 months is a speech and language milestone. The four domains are gross motor, fine motor, social/adaptive, and speech/language."
  },
  // ============================================================
  // MOBILITY  (ids 51-105)  - exemplars, drugs, prevention, 6 P's
  // ============================================================
  {
    "id": 51, "topic": "Mobility",
    "question": "A postoperative patient reports deep, unrelenting pain not relieved by opioids, and the nurse notes paresthesia, pallor, and a pulseless, tense extremity. What is the nurse's FIRST action?",
    "options": ["Elevate the limb above the heart and reassess in an hour", "Apply ice and continue to monitor", "Recognize compartment syndrome (6 P's) and notify the surgeon immediately", "Massage the extremity to restore circulation"],
    "answer": 2,
    "rationale": "The 6 P's - Pain (unrelieved, worse on passive stretch), Pressure, Paresthesia, Pallor, Paralysis, Pulselessness - signal compartment syndrome, a surgical emergency. Notify the surgeon immediately; treatment is fasciotomy within 4-6 hours."
  },
  {
    "id": 52, "topic": "Mobility",
    "question": "Which findings represent the 6 P's the nurse assesses for compartment syndrome after a fracture?",
    "options": ["Pain, Pallor, Paresthesia, Pulselessness, Paralysis, Pressure", "Pain, Pyrexia, Pallor, Pulse, Position, Pressure", "Pain, Pallor, Pulse, Pressure, Perfusion, Posture", "Pressure, Pyrexia, Paralysis, Pallor, Pain, Pulse"],
    "answer": 0,
    "rationale": "The 6 P's of compartment syndrome are Pain, Pressure, Paresthesia, Pallor, Paralysis, and Pulselessness. Neurovascular checks assess these hourly."
  },
  {
    "id": 53, "topic": "Mobility",
    "question": "During hourly neurovascular checks on a leg in Buck's traction, which finding requires the nurse to intervene FIRST?",
    "options": ["Capillary refill of 2 seconds", "Palpable dorsalis pedis pulse", "Numbness, tingling, and inability to move the toes", "Pink, warm skin distal to the traction"],
    "answer": 2,
    "rationale": "Numbness, tingling, and loss of movement are abnormal neurovascular findings suggesting compromised perfusion/compartment syndrome (the 6 P's) and require immediate action."
  },
  {
    "id": 54, "topic": "Mobility",
    "question": "A patient with osteoporosis is prescribed alendronate (Fosamax), a bisphosphonate. Which instruction is essential to prevent esophageal injury?",
    "options": ["Take at bedtime with a small sip of water", "Take with a full glass of water on an empty stomach and remain upright for at least 30 minutes", "Take with milk to reduce stomach upset", "Take with a calcium supplement at the same time"],
    "answer": 1,
    "rationale": "Bisphosphonates are taken with a full glass of water on an empty stomach, 30 minutes before food/other meds, and the patient must stay upright at least 30 minutes to prevent esophageal irritation. Avoid calcium products for an hour."
  },
  {
    "id": 55, "topic": "Mobility",
    "question": "The three drug categories used to manage/prevent osteoporosis are:",
    "options": ["NSAIDs, opioids, and muscle relaxants", "Bisphosphonates, calcium supplements, and vitamin D", "Antibiotics, anticoagulants, and antipyretics", "DMARDs, corticosteroids, and biologics"],
    "answer": 1,
    "rationale": "Osteoporosis management uses bisphosphonates (e.g., alendronate) to inhibit bone resorption, plus calcium and vitamin D supplements, with weight-bearing exercise and fall prevention."
  },
  {
    "id": 56, "topic": "Mobility",
    "question": "A patient taking a calcium supplement asks how to take it safely. Which teaching is correct?",
    "options": ["Take the entire daily dose at once", "Take in divided doses of less than 500 mg at a time with water; report flank pain", "Take it with thyroid medication for convenience", "It is safe even with a history of kidney stones"],
    "answer": 1,
    "rationale": "Calcium is best absorbed in divided doses under 500 mg at a time. It is contraindicated with renal calculi and hypercalcemia - report flank pain and monitor calcium levels; separate from thyroid meds."
  },
  {
    "id": 57, "topic": "Mobility",
    "question": "A patient taking alendronate reports new difficulty swallowing and jaw pain. What is the nurse's priority action?",
    "options": ["Reassure the patient these are expected side effects", "Hold the medication and notify the provider, as these may indicate esophageal injury or jaw osteonecrosis", "Increase the dose", "Encourage the patient to lie down after dosing"],
    "answer": 1,
    "rationale": "Difficulty swallowing and jaw pain are serious adverse effects of bisphosphonates (esophageal injury, osteonecrosis of the jaw). Hold the drug and notify the provider."
  },
  {
    "id": 58, "topic": "Mobility",
    "question": "A nurse teaches an older adult about primary prevention of osteoporosis and mobility loss. Which action fits primary prevention?",
    "options": ["Obtaining a DEXA scan to detect low bone density", "Weight-bearing exercise, adequate calcium/vitamin D, and smoking cessation before disease develops", "Rehabilitation after a hip fracture", "Taking bisphosphonates for diagnosed osteoporosis"],
    "answer": 1,
    "rationale": "Primary prevention occurs BEFORE disease: health promotion such as weight-bearing exercise, nutrition (calcium/vitamin D/protein), weight management, and smoking cessation. Screening is secondary; rehab is tertiary."
  },
  {
    "id": 59, "topic": "Mobility",
    "question": "Which activity is an example of SECONDARY prevention for altered mobility?",
    "options": ["Teaching fall prevention to a healthy adult", "Screening with a DEXA scan, the TUG test, or BMAT 2.0 for early detection", "Rehabilitating a patient after joint replacement", "Administering long-term bisphosphonate therapy"],
    "answer": 1,
    "rationale": "Secondary prevention is early detection/screening: DEXA for osteoporosis, the Timed Up and Go (TUG) test, BMAT 2.0, and fall-risk tools like JHHFRAT."
  },
  {
    "id": 60, "topic": "Mobility",
    "question": "A patient is recovering after a hip fracture repair. Which action reflects TERTIARY prevention?",
    "options": ["Teaching calcium intake to a healthy teenager", "Osteoporosis screening at a health fair", "Collaborating with PT/OT/dietician to restore the patient to the highest possible function and minimize complications", "Advising smoking cessation before any disease"],
    "answer": 2,
    "rationale": "Tertiary prevention occurs AFTER disease/injury: returning the patient to the highest level of function, minimizing complications, and preventing comorbidities through PT/OT/dietician collaboration."
  },
  {
    "id": 61, "topic": "Mobility",
    "question": "A patient with osteoarthritis (OA) asks how it differs from rheumatoid arthritis (RA). Which statement by the nurse is accurate?",
    "options": ["OA is a symmetric autoimmune inflammatory disease", "OA is a noninflammatory degenerative joint disease; RA is a symmetric autoimmune inflammatory disease", "OA and RA are the same condition", "RA affects only one joint and improves with rest"],
    "answer": 1,
    "rationale": "OA is a slowly progressive, noninflammatory degenerative joint disease. RA is a systemic, symmetric autoimmune inflammatory disorder - a key exemplar distinction."
  },
  {
    "id": 62, "topic": "Mobility",
    "question": "Which clinical picture is most consistent with osteoarthritis rather than rheumatoid arthritis?",
    "options": ["Symmetric small-joint swelling with warmth, prolonged morning stiffness, and systemic fatigue", "Asymmetric joint pain that worsens with use and improves with rest, with morning stiffness under 30 minutes", "Fever with symmetric joint inflammation", "Butterfly facial rash"],
    "answer": 1,
    "rationale": "OA pain worsens with joint use and improves with rest, is often asymmetric, and morning stiffness lasts under 30 minutes. Prolonged stiffness, symmetry, warmth, and systemic symptoms suggest RA."
  },
  {
    "id": 63, "topic": "Mobility",
    "question": "A patient with rheumatoid arthritis is started on methotrexate. The nurse understands this drug class is used to:",
    "options": ["Only relieve acute pain", "Modify the disease process (a DMARD) to slow joint destruction in autoimmune inflammatory arthritis", "Replace weight-bearing exercise", "Increase bone resorption"],
    "answer": 1,
    "rationale": "Methotrexate is a disease-modifying antirheumatic drug (DMARD) used in RA to slow the autoimmune disease process and joint destruction - contrasted with OA, which is managed with analgesics/NSAIDs."
  },
  {
    "id": 64, "topic": "Mobility",
    "question": "A patient with osteoarthritis asks about pain relief. Which pharmacologic option is typically first-line for OA?",
    "options": ["A DMARD such as methotrexate", "Acetaminophen or NSAIDs and topical analgesics", "Long-term systemic corticosteroids", "A bisphosphonate"],
    "answer": 1,
    "rationale": "OA pain is managed with acetaminophen, NSAIDs, and topical analgesics (e.g., capsaicin/diclofenac), with intra-articular corticosteroid injections and, if severe, joint replacement. DMARDs are for RA."
  },
  {
    "id": 65, "topic": "Mobility",
    "question": "A nurse teaches a patient with osteoarthritis about heat and cold therapy. Which instruction is correct?",
    "options": ["Apply heat and cold for at least 2 hours at a time", "Use heat to relieve stiffness and cold to reduce inflammation, limited to about 20 minutes", "Only cold is ever helpful", "Never combine rest with activity"],
    "answer": 1,
    "rationale": "In OA, heat relieves stiffness and cold reduces inflammation/swelling; apply for about 20 minutes only. Balance rest with activity and protect the joints."
  },
  {
    "id": 66, "topic": "Mobility",
    "question": "A patient with knee osteoarthritis says, \"I'll start using a cane to protect my joints.\" How should the nurse evaluate this statement?",
    "options": ["It shows a misunderstanding of joint protection", "It demonstrates correct understanding of minimizing joint stress", "It indicates the patient should stop all activity", "It suggests the patient needs surgery immediately"],
    "answer": 1,
    "rationale": "Using assistive devices such as a cane protects joints and reduces stress - correct OA self-management. High-impact activity and total inactivity are discouraged."
  },
  {
    "id": 67, "topic": "Mobility",
    "question": "A patient is found on the floor after a fall. Which assessment finding most strongly suggests a hip fracture?",
    "options": ["The leg is lengthened and internally rotated", "The affected leg is shortened, externally rotated, and adducted with severe pain", "Pain is relieved by moving the leg", "The patient can bear full weight"],
    "answer": 1,
    "rationale": "A hip fracture classically presents with the affected leg shortened, externally rotated, and adducted, with severe pain, muscle spasm, and inability to bear weight."
  },
  {
    "id": 68, "topic": "Mobility",
    "question": "A patient in Buck's traction before hip surgery has the weights resting on the floor. What should the nurse do?",
    "options": ["Leave them, as this reduces pain", "Reposition so the weights hang freely without touching the floor or bed", "Remove the traction to reposition the patient", "Add more weight to compensate"],
    "answer": 1,
    "rationale": "In Buck's (skin) traction the weights must hang freely and never rest on the floor or bed. Do not remove or adjust weights without an order; perform hourly neurovascular checks."
  },
  {
    "id": 69, "topic": "Mobility",
    "question": "After a total hip replacement (posterior approach), which patient action requires the nurse to intervene?",
    "options": ["Using an abductor pillow between the legs", "Crossing the legs at the ankles while sitting", "Using a raised toilet seat", "Keeping the toes pointed forward"],
    "answer": 1,
    "rationale": "Crossing the legs causes adduction and can dislocate the prosthesis. Hip precautions: avoid adduction, flexion greater than 90 degrees, and internal rotation; use an abductor pillow."
  },
  {
    "id": 70, "topic": "Mobility",
    "question": "The nurse is assessing a patient 2 days after a total hip replacement. Which finding is the priority to report?",
    "options": ["Pain rated 3/10 after medication", "A new lump in the buttock with sudden severe hip pain and leg shortening", "Ambulating with a walker", "Serous drainage on the dressing decreasing over time"],
    "answer": 1,
    "rationale": "A lump in the buttock with severe pain and shortening indicates prosthetic dislocation - report immediately. Neurovascular checks are the priority post-op assessment."
  },
  {
    "id": 71, "topic": "Mobility",
    "question": "A patient with a femur fracture develops sudden dyspnea, confusion, and petechiae over the chest. What complication does the nurse suspect?",
    "options": ["Compartment syndrome", "Fat embolism syndrome", "Wound infection", "Osteoarthritis flare"],
    "answer": 1,
    "rationale": "Fat embolism syndrome from long-bone fractures presents with respiratory distress, altered mental status, and petechiae as fat globules lodge in pulmonary vessels."
  },
  {
    "id": 72, "topic": "Mobility",
    "question": "A patient on bed rest is at risk for DVT. Which nursing action is the priority to PREVENT venous thromboembolism?",
    "options": ["Massage the calves every shift", "Encourage early ambulation, ankle pumps/ROM, hydration, and apply SCDs as ordered", "Keep the patient flat and immobile", "Cross the legs while sitting"],
    "answer": 1,
    "rationale": "VTE prevention includes early ambulation, ROM/ankle pumps, hydration, SCDs, and anticoagulation as ordered. Never massage the legs, which can dislodge a clot."
  },
  {
    "id": 73, "topic": "Mobility",
    "question": "A nurse suspects a DVT in the left leg. What is the correct FIRST action?",
    "options": ["Massage the leg and ambulate the patient", "Measure bilateral calf circumference, avoid massaging/ambulating, and notify the provider", "Apply heat and continue activity", "Elevate and ignore until the next shift"],
    "answer": 1,
    "rationale": "With suspected DVT, measure bilateral calf circumference (a difference over 3 cm is significant), do NOT massage or ambulate, and report to the provider; Doppler ultrasound confirms the clot."
  },
  {
    "id": 74, "topic": "Mobility",
    "question": "Which positioning device does the nurse use to prevent footdrop in an immobile patient?",
    "options": ["Trochanter roll", "Ankle-foot orthosis (AFO) brace or footboard", "Abductor pillow", "Trapeze bar"],
    "answer": 1,
    "rationale": "An AFO brace or footboard (with ankle ROM) prevents footdrop (plantar flexion contracture). A trochanter roll prevents external hip rotation; a trapeze bar aids bed mobility."
  },
  {
    "id": 75, "topic": "Mobility",
    "question": "A nurse applies a trochanter roll to an immobile patient. What is its purpose?",
    "options": ["Prevent footdrop", "Prevent external rotation of the hip", "Prevent hand contractures", "Assist with sitting up"],
    "answer": 1,
    "rationale": "A trochanter roll maintains alignment by preventing external rotation of the hip. AFO braces prevent footdrop, hand splints prevent hand contractures."
  },
  {
    "id": 76, "topic": "Mobility",
    "question": "A DEXA scan reports a T-score of -2.7. How does the nurse interpret this result?",
    "options": ["Normal bone density", "Osteopenia", "Osteoporosis", "Inconclusive"],
    "answer": 2,
    "rationale": "A T-score of -2.5 or lower indicates osteoporosis. +1 to -1 is normal; -1 to -2.5 is osteopenia. DEXA is the gold standard, especially for those over 65."
  },
  {
    "id": 77, "topic": "Mobility",
    "question": "Which patient statement indicates a need for further teaching about osteoporosis self-care?",
    "options": ["\"I'll remove throw rugs to prevent falls.\"", "\"I won't use my cane because I don't want to look old.\"", "\"I'll do weight-bearing exercise like walking.\"", "\"I'll take my calcium in divided doses.\""],
    "answer": 1,
    "rationale": "Refusing an assistive device increases fall/fracture risk and needs correction. Fall prevention, weight-bearing exercise, and divided calcium dosing are all correct."
  },
  {
    "id": 78, "topic": "Mobility",
    "question": "A nurse grades a patient's muscle strength as 3/5. What does this finding indicate?",
    "options": ["Normal strength against full resistance", "Fair - movement against gravity but not against added resistance", "Trace movement only", "No muscle contraction"],
    "answer": 1,
    "rationale": "On the 0-5 scale, 3/5 (fair) is movement against gravity but not against resistance. 5/5 is normal, 1/5 trace, 0/5 no contraction."
  },
  {
    "id": 79, "topic": "Mobility",
    "question": "A patient who is non-weight-bearing (NWB) on the right leg needs to ambulate. Which device/gait is appropriate?",
    "options": ["A cane on the right side", "Crutches or a knee scooter using a 3-point gait", "A two-point gait bearing full weight", "No assistive device needed"],
    "answer": 1,
    "rationale": "Non-weight-bearing patients use a 3-point gait with crutches, a knee scooter, or a wheelchair, keeping all weight off the affected leg."
  },
  {
    "id": 80, "topic": "Mobility",
    "question": "A nurse teaches a patient to use a cane. Which instruction is correct?",
    "options": ["Hold the cane on the same side as the weak leg", "Hold the cane on the strong side; the cane and weak leg move together", "Lead with the weak leg going up stairs", "Lead with the good leg going down stairs"],
    "answer": 1,
    "rationale": "The cane goes on the strong (non-affected) side and moves with the weak leg. Up stairs: good leg first ('up with the good'); down stairs: bad leg and cane first."
  },
  {
    "id": 81, "topic": "Mobility",
    "question": "When teaching crutch walking, the nurse instructs the patient to bear weight on the:",
    "options": ["Axillary pads under the arms", "Hand grips, keeping weight off the axillae", "Affected foot", "Shoulders"],
    "answer": 1,
    "rationale": "Weight is borne on the hand grips, NOT the axillae, to prevent brachial nerve damage. Use a tripod stance with hands at hip height."
  },
  {
    "id": 82, "topic": "Mobility",
    "question": "A nurse is teaching safe walker use. Which instruction is correct?",
    "options": ["Use the walker to pull yourself up from a chair", "Do not use the walker to stand, sit, or get out of bed; advance the walker, then the weak leg, then the strong leg", "Lean the walker against the wall while walking", "Keep elbows fully extended"],
    "answer": 1,
    "rationale": "A walker should not be used to stand or sit. Elbows flex about 15-30 degrees; sequence is walker, weak leg, strong leg."
  },
  {
    "id": 83, "topic": "Mobility",
    "question": "A patient on prolonged bed rest develops decreased peristalsis. Which finding should the nurse assess for as a complication of immobility?",
    "options": ["Increased urine output", "Constipation and possible paralytic ileus (abdominal distension, absent bowel sounds)", "Bradycardia", "Weight gain from increased appetite"],
    "answer": 1,
    "rationale": "Immobility decreases peristalsis, causing constipation and risk of paralytic ileus. Assess bowel sounds and BM status; prevent with hydration, fiber, stool softeners, and early ambulation."
  },
  {
    "id": 84, "topic": "Mobility",
    "question": "A patient stands up after prolonged bed rest and becomes dizzy and pale with a rapid pulse. What should the nurse do FIRST?",
    "options": ["Encourage the patient to keep standing to adjust", "Assist the patient to sit or lie down, then implement gradual position changes and dangling before standing", "Restrict the patient's fluids", "Apply a footboard"],
    "answer": 1,
    "rationale": "These are signs of orthostatic hypotension (a BP drop within 3 minutes of rising). Ensure safety first (sit/lie down), then prevent recurrence with gradual position changes, dangling, and fluids."
  },
  {
    "id": 85, "topic": "Mobility",
    "question": "To prevent atelectasis and pneumonia in an immobile postoperative patient, which intervention should the nurse prioritize?",
    "options": ["Keep the patient flat and still", "Incentive spirometer 10 times per hour while awake, deep breathing/coughing, and elevate the HOB", "Restrict fluids", "Discourage repositioning"],
    "answer": 1,
    "rationale": "Prevent respiratory complications with incentive spirometry (about 10x/hr while awake), deep breathing and coughing, HOB elevation, turning every 2 hours, hydration, and early mobility."
  },
  {
    "id": 86, "topic": "Mobility",
    "question": "A patient at high risk for pressure injury has a Braden score of 13. What is the nurse's priority intervention?",
    "options": ["No preventive action is needed", "Implement a turning schedule every 2 hours, offload heels, and redistribute pressure", "Keep the patient in one position to avoid friction", "Restrict fluids and protein"],
    "answer": 1,
    "rationale": "A Braden score of 18 or under indicates risk (lower = higher risk). Prevent pressure injury with turning every 2 hours, heel offloading, pressure redistribution, skin care, and nutrition."
  },
  {
    "id": 87, "topic": "Mobility",
    "question": "A pressure injury shows intact skin with non-blanchable erythema. How does the nurse stage it?",
    "options": ["Stage 1", "Stage 2", "Stage 3", "Unstageable"],
    "answer": 0,
    "rationale": "Stage 1 is non-blanchable erythema of intact skin. Stage 2 has partial-thickness loss with exposed dermis; unstageable is obscured by slough/eschar."
  },
  {
    "id": 88, "topic": "Mobility",
    "question": "A wound has full-thickness skin loss with visible subcutaneous fat but no exposed bone, tendon, or muscle. Which stage is this?",
    "options": ["Stage 2", "Stage 3", "Stage 4", "Deep tissue pressure injury"],
    "answer": 1,
    "rationale": "Stage 3 is full-thickness skin loss that may expose fat and slough, but bone, tendon, and muscle are NOT exposed."
  },
  {
    "id": 89, "topic": "Mobility",
    "question": "In osteoporosis, which process explains the loss of bone mass?",
    "options": ["Bone deposition by osteoblasts exceeds resorption", "Bone resorption by osteoclasts exceeds bone deposition by osteoblasts", "Cartilage overgrowth", "Joint inflammation"],
    "answer": 1,
    "rationale": "In osteoporosis, osteoclast-driven bone resorption exceeds osteoblast bone formation, lowering bone mass. It is the 'silent thief' and is not normal aging."
  },
  {
    "id": 90, "topic": "Mobility",
    "question": "Which patient has the most risk factors for osteoporosis?",
    "options": ["A 30-year-old who jogs 3 times weekly with good calcium intake", "A thin 70-year-old woman who has smoked for 50 years", "A 25-year-old male athlete", "A 40-year-old with a normal BMI who exercises"],
    "answer": 1,
    "rationale": "Advanced age, female sex, low body weight, and long-term smoking are all osteoporosis risk factors. Weight-bearing exercise and adequate calcium are protective."
  },
  {
    "id": 91, "topic": "Mobility",
    "question": "Which early clinical manifestation of osteoporosis should the nurse teach patients to report?",
    "options": ["Symmetric joint warmth", "Back pain from a collapsed vertebra or a fracture with minimal trauma", "High fever", "Improved height over time"],
    "answer": 1,
    "rationale": "Early osteoporosis manifestations include back pain (collapsed vertebrae) and fragility fractures with minimal trauma, plus gradual height loss and kyphosis."
  },
  {
    "id": 92, "topic": "Mobility",
    "question": "Which bony nodes at the distal interphalangeal joints are characteristic of osteoarthritis?",
    "options": ["Bouchard's nodes", "Heberden's nodes", "Tophi", "Osler's nodes"],
    "answer": 1,
    "rationale": "Heberden's nodes form at the DIP (fingertip) joints in OA; Bouchard's nodes form at the PIP (middle) joints."
  },
  {
    "id": 93, "topic": "Mobility",
    "question": "Which foods should the nurse recommend to a patient needing more dietary calcium?",
    "options": ["Banana and grape juice", "Yogurt, kale, and canned sardines", "White bread and margarine", "Chicken breast and rice"],
    "answer": 1,
    "rationale": "Calcium-rich foods include dairy (yogurt), green leafy vegetables (kale), fortified foods, and canned fish with bones (sardines)."
  },
  {
    "id": 94, "topic": "Mobility",
    "question": "A nurse teaches a patient with vitamin D deficiency. Besides supplements, which recommendation increases vitamin D?",
    "options": ["Avoid all sun exposure", "Moderate sun exposure and intake of fish, egg yolk, and fortified milk/cereal", "Increase phosphorus intake", "Take calcium with thyroid medication"],
    "answer": 1,
    "rationale": "Vitamin D sources include sun exposure and foods such as fish, egg yolk, and fortified milk/cereal. Vitamin D aids calcium absorption for bone health."
  },
  {
    "id": 95, "topic": "Mobility",
    "question": "During the Timed Up and Go (TUG) test, a patient takes 14 seconds. How does the nurse interpret this?",
    "options": ["Normal mobility, no fall risk", "At risk for falling (12 seconds or greater)", "Requires no follow-up", "Indicates full independence"],
    "answer": 1,
    "rationale": "A TUG time of 12 seconds or greater indicates a fall risk. The TUG times standing, walking 10 feet, turning, and sitting - a secondary-prevention screening tool."
  },
  {
    "id": 96, "topic": "Mobility",
    "question": "Which screening tool assesses mobility using the steps Sit, Stretch, Stand, and Step?",
    "options": ["Braden Scale", "Bedside Mobility Assessment Test (BMAT 2.0)", "Denver II", "Glasgow Coma Scale"],
    "answer": 1,
    "rationale": "The BMAT 2.0 (Sit/Stretch/Stand/Step) assesses mobility level and guides safe patient handling and mobility techniques."
  },
  {
    "id": 97, "topic": "Mobility",
    "question": "A patient after joint arthroplasty is placed on a device that gently flexes and extends the joint. Which device is this?",
    "options": ["Sequential compression device", "Continuous passive motion (CPM) machine", "Incentive spirometer", "Trapeze bar"],
    "answer": 1,
    "rationale": "A Continuous Passive Motion (CPM) machine promotes joint ROM after arthroplasty. SCDs prevent DVT; an incentive spirometer expands the lungs."
  },
  {
    "id": 98, "topic": "Mobility",
    "question": "A patient with an order for 'weight-bearing as tolerated' after total hip replacement needs to use the bathroom. What is the safest nursing action?",
    "options": ["Keep the patient on bed rest and use a bedpan only", "Assist with a walker to a bathroom that has grab bars and a raised toilet seat", "Have the patient hop on the unaffected leg", "Log-roll the patient onto the operative side"],
    "answer": 1,
    "rationale": "Weight-bearing as tolerated allows ambulation with an assistive device. A walker plus grab bars and a raised toilet seat supports safe mobility while maintaining hip precautions."
  },
  {
    "id": 99, "topic": "Mobility",
    "question": "The nurse is preventing disuse syndrome in an immobile patient. Which intervention is most important?",
    "options": ["Strict, prolonged bed rest", "Early mobilization, effective pain management, nutrition, and psychological support", "Withholding physical therapy", "Limiting fluids and activity"],
    "answer": 1,
    "rationale": "Disuse syndrome (physical/mental deterioration from inactivity) is prevented with early mobilization, pain control, adequate nutrition, patient education, and psychological support."
  },
  {
    "id": 100, "topic": "Mobility",
    "question": "Which is an antecedent (prerequisite) required for normal mobility?",
    "options": ["Chronic pain", "Adequate energy, muscle strength, skeletal stability, and joint function", "A sedentary lifestyle", "Neurologic impairment"],
    "answer": 1,
    "rationale": "Antecedents of mobility include adequate energy, muscle strength, skeletal stability, joint function, neuromuscular coordination, and appropriate age-related function."
  },
  {
    "id": 101, "topic": "Mobility",
    "question": "A patient with rheumatoid arthritis reports the worst joint stiffness in the morning. Which finding differentiates RA morning stiffness from OA?",
    "options": ["RA stiffness lasts less than 15 minutes", "RA stiffness typically lasts longer than 1 hour and improves with activity", "RA stiffness only occurs after heavy exercise", "RA never causes morning stiffness"],
    "answer": 1,
    "rationale": "RA (inflammatory) causes prolonged morning stiffness lasting over an hour that eases with movement, whereas OA stiffness is under 30 minutes and worsens with use."
  },
  {
    "id": 102, "topic": "Mobility",
    "question": "A patient with a hip fracture is being repaired with screws and plates. Which surgical procedure is this?",
    "options": ["Closed reduction with percutaneous pinning (CRPP)", "Open reduction with internal fixation (ORIF)", "Total hip replacement (THR)", "Partial hip replacement (PHR)"],
    "answer": 1,
    "rationale": "ORIF repairs the fracture with screws, plates, or rods. CRPP uses pins; PHR replaces the femoral head; THR replaces the head and acetabulum."
  },
  {
    "id": 103, "topic": "Mobility",
    "question": "A nurse reviews normal musculoskeletal assessment findings. Which is a NORMAL result?",
    "options": ["Limited ROM with crepitus", "Full ROM without pain, 5/5 muscle strength, and no swelling or deformity", "Muscle strength of 2/5", "Joint tenderness on palpation"],
    "answer": 1,
    "rationale": "Normal findings: full ROM without pain, 5/5 strength, no atrophy/asymmetry, no swelling/deformity/crepitus, and ordinary spinal curvature."
  },
  {
    "id": 104, "topic": "Mobility",
    "question": "A patient with osteoarthritis of the knees who is obese asks how to reduce joint stress. Which recommendation should the nurse prioritize?",
    "options": ["Begin high-impact running", "Weight management/reduction and low-impact activity with assistive devices", "Complete bed rest", "Daily systemic corticosteroids"],
    "answer": 1,
    "rationale": "Weight reduction lessens load on weight-bearing joints in OA. Low-impact activity, assistive devices, joint protection, and PT/dietician referral are appropriate."
  },
  {
    "id": 105, "topic": "Mobility",
    "question": "A patient reports calf pain, unilateral swelling, warmth, and redness after several days of immobility. What should the nurse do FIRST?",
    "options": ["Massage the calf and apply heat", "Notify the provider, keep the patient from ambulating, and avoid massaging the leg", "Have the patient walk laps to improve circulation", "Apply an elastic bandage and discharge the patient"],
    "answer": 1,
    "rationale": "Unilateral calf pain, swelling, warmth, and redness suggest DVT. Do not massage or ambulate (risk of PE); notify the provider for evaluation (Doppler ultrasound) and anticoagulation."
  },
  // ============================================================
  // THERMOREGULATION  (ids 106-150)
  // drivers, 4 heat-loss types, heat exhaustion vs stroke,
  // hypothermia stages, MH/dantrolene, SMART implementation
  // ============================================================
  {
    "id": 106, "topic": "Thermoregulation",
    "question": "Which structure drives thermoregulation by acting as the body's thermostat?",
    "options": ["Cerebellum", "Hypothalamus", "Pituitary gland", "Medulla oblongata"],
    "answer": 1,
    "rationale": "The hypothalamus is the body's thermostat, balancing heat loss and production. The anterior hypothalamus triggers heat loss; the posterior triggers heat production."
  },
  {
    "id": 107, "topic": "Thermoregulation",
    "question": "A patient is overheated. Which action does the ANTERIOR hypothalamus trigger to drive heat LOSS?",
    "options": ["Vasoconstriction and shivering", "Sweating and vasodilation", "Increased metabolism", "Brown fat metabolism"],
    "answer": 1,
    "rationale": "The anterior hypothalamus (like air conditioning) triggers heat loss via sweating, vasodilation, and inhibition of heat production. The posterior hypothalamus drives heat production."
  },
  {
    "id": 108, "topic": "Thermoregulation",
    "question": "A nurse places a warm blanket on a patient and heat transfers from the blanket directly to the skin. Which of the 4 types of heat exchange is this?",
    "options": ["Radiation", "Conduction", "Convection", "Evaporation"],
    "answer": 1,
    "rationale": "Conduction is the transfer of heat between two objects in direct contact (warm blanket to skin). It is one of the 4 types of heat loss/exchange."
  },
  {
    "id": 109, "topic": "Thermoregulation",
    "question": "A nurse uses a fan to cool a febrile patient. Which type of heat loss is being used?",
    "options": ["Radiation", "Conduction", "Convection", "Evaporation"],
    "answer": 2,
    "rationale": "Convection transfers heat away by air movement, such as a fan. It is one of the 4 types of heat loss."
  },
  {
    "id": 110, "topic": "Thermoregulation",
    "question": "The nurse removes a patient's heavy blankets so heat radiates away from the skin surface. Which type of heat loss is this?",
    "options": ["Radiation", "Conduction", "Convection", "Evaporation"],
    "answer": 0,
    "rationale": "Radiation transfers heat from one surface to another without direct contact; the body can lose up to 65% of heat this way. Removing coverings increases radiant loss."
  },
  {
    "id": 111, "topic": "Thermoregulation",
    "question": "A patient is diaphoretic and heat is lost as sweat turns from liquid to vapor on the skin. Which type of heat loss is this?",
    "options": ["Radiation", "Conduction", "Convection", "Evaporation"],
    "answer": 3,
    "rationale": "Evaporation is heat loss as moisture (sweat) converts from liquid to vapor. Radiation, conduction, convection, and evaporation are the 4 types of heat loss."
  },
  {
    "id": 112, "topic": "Thermoregulation",
    "question": "A marathon runner has profuse sweating, extreme thirst, tachycardia, and dry mucous membranes but is alert with cool, clammy skin. Which condition and priority action apply?",
    "options": ["Heat stroke; give antipyretics", "Heat exhaustion; move to a cooler area and rehydrate to restore fluid/electrolyte balance", "Hypothermia; apply warm blankets", "Malignant hyperthermia; give dantrolene"],
    "answer": 1,
    "rationale": "Heat exhaustion results from excess water/electrolyte loss through sweating - the patient remains alert. The priority is moving to a cooler environment and rehydrating."
  },
  {
    "id": 113, "topic": "Thermoregulation",
    "question": "A patient found outdoors has hot, dry skin, a temperature of 106 F, and confusion. What differentiates heat STROKE from heat exhaustion, and what is the priority?",
    "options": ["Heat stroke has profuse sweating; give oral fluids", "Heat stroke involves failed thermoregulation with hot/dry skin and CNS changes - it is a medical emergency requiring rapid active cooling", "Heat stroke is not serious; send home", "Heat stroke is treated with warm blankets"],
    "answer": 1,
    "rationale": "Heat stroke (temperature over 105.8 F) is failure of hypothalamic thermoregulation with hot/dry skin, confusion, and high mortality. It is an emergency: rapid active cooling, remove clothing, cool towels, fans, cooled IV fluids, and monitor for dysrhythmias."
  },
  {
    "id": 114, "topic": "Thermoregulation",
    "question": "A patient with heat stroke develops fixed, non-reactive pupils and coma. The nurse recognizes these as:",
    "options": ["Expected early signs that resolve quickly", "Late signs of CNS dysfunction associated with high mortality", "Signs of mild dehydration", "Indications the patient can be discharged"],
    "answer": 1,
    "rationale": "Fixed non-reactive pupils, coma, and CNS dysfunction are late signs of heat stroke; patients with these findings will most likely die, underscoring the emergency."
  },
  {
    "id": 115, "topic": "Thermoregulation",
    "question": "During surgery a patient develops rapidly rising temperature, muscle rigidity, tachycardia, and increased end-tidal CO2. What is the nurse's PRIORITY intervention?",
    "options": ["Give acetaminophen and continue surgery", "Stop the anesthetic agents, give 100% oxygen, and administer dantrolene sodium", "Administer a calcium channel blocker", "Apply warm blankets"],
    "answer": 1,
    "rationale": "These signs indicate malignant hyperthermia. Priorities: stop the triggering anesthetic, give 100% oxygen, and administer dantrolene sodium 2-3 mg/kg, with active cooling. Avoid calcium channel blockers."
  },
  {
    "id": 116, "topic": "Thermoregulation",
    "question": "Which medication is the specific treatment for malignant hyperthermia?",
    "options": ["Epinephrine", "Dantrolene sodium", "A calcium channel blocker", "Acetaminophen"],
    "answer": 1,
    "rationale": "Dantrolene sodium is the specific muscle relaxant used to treat malignant hyperthermia. Calcium channel blockers must be avoided."
  },
  {
    "id": 117, "topic": "Thermoregulation",
    "question": "A patient reports a family history of malignant hyperthermia before surgery. What is the nurse's priority action?",
    "options": ["Ignore it, since MH is rare", "Report the family history to the anesthesia/surgical team so precautions can be taken", "Administer dantrolene prophylactically without an order", "Cancel all surgery permanently"],
    "answer": 1,
    "rationale": "Malignant hyperthermia is hereditary and triggered by anesthetic agents/neuromuscular blockers. Reporting the family history allows the team to plan precautions and have dantrolene available."
  },
  {
    "id": 118, "topic": "Thermoregulation",
    "question": "A patient is rescued from cold water with a temperature of 88 F, depressed mental status, no shivering, and a slow irregular pulse. Which stage of hypothermia is this?",
    "options": ["Mild (90-95 F)", "Moderate (82.4-90 F)", "Severe (below 82.4 F)", "Normothermia"],
    "answer": 1,
    "rationale": "Moderate hypothermia (82.4-90 F) presents with depressed mental status, absent shivering, slow/irregular pulse, and lowered BP and respirations."
  },
  {
    "id": 119, "topic": "Thermoregulation",
    "question": "A patient with a temperature of 93 F is shivering, has slurred speech, poor coordination, and confusion. Which stage of hypothermia is this?",
    "options": ["Mild (90-95 F)", "Moderate (82.4-90 F)", "Severe (below 82.4 F)", "Frostbite"],
    "answer": 0,
    "rationale": "Mild hypothermia (90-95 F) presents with shivering, slurred speech, poor coordination, confusion, tachycardia, and tachypnea."
  },
  {
    "id": 120, "topic": "Thermoregulation",
    "question": "A patient with a core temperature of 80 F appears near death with a very slow pulse, decreased response to stimuli, and dilated pupils. Which stage of hypothermia is this?",
    "options": ["Mild", "Moderate", "Severe (below 82.4 F)", "Normothermia"],
    "answer": 2,
    "rationale": "Severe hypothermia (below 82.4 F) resembles death, with slow pulse/respirations, decreased response to stimuli, risk of V-fib, dilated unresponsive pupils, and coma."
  },
  {
    "id": 121, "topic": "Thermoregulation",
    "question": "A nurse writes a SMART goal for a febrile patient. Which is a correctly written SMART outcome?",
    "options": ["The patient will feel better soon", "The patient will maintain a temperature within normal range within 1 hour of receiving an antipyretic", "The patient will be healthy", "The patient's temperature will improve at some point"],
    "answer": 1,
    "rationale": "A SMART goal is Specific, Measurable, Achievable, Relevant, and Time-bound. 'Temperature within normal range within 1 hour of antipyretic' meets all criteria; the others are vague."
  },
  {
    "id": 122, "topic": "Thermoregulation",
    "question": "For a hyperthermic (febrile) patient, which nursing implementation is appropriate?",
    "options": ["Apply extra warm blankets", "Remove excess clothing, give tepid baths, apply cool cloths to the axilla/groin, increase fluids, and give antipyretics", "Restrict all fluids", "Place the patient near a heater"],
    "answer": 1,
    "rationale": "Hyperthermia interventions: reduce coverings, tepid baths, cool cloths to axilla/groin/forehead, cooling blankets and fans, increased fluids, and antipyretics for fever."
  },
  {
    "id": 123, "topic": "Thermoregulation",
    "question": "For a hypothermic patient, which nursing implementation is appropriate?",
    "options": ["Leave wet clothing on to trap heat", "Remove wet clothes, apply warm blankets/heated packs, give warm high-carbohydrate beverages, and monitor skin every 15-30 minutes", "Give cold IV fluids", "Open windows to circulate air"],
    "answer": 1,
    "rationale": "Hypothermia care: shelter from cold, remove wet clothing, apply warm blankets/heated packs/convection heaters, give warm high-carb beverages, and monitor skin every 15-30 minutes."
  },
  {
    "id": 124, "topic": "Thermoregulation",
    "question": "A newborn is at risk for cold stress. How does a neonate primarily generate heat, since they cannot shiver?",
    "options": ["Voluntary muscle contraction", "Non-shivering thermogenesis by metabolizing brown fat", "Vasodilation", "Sweating"],
    "answer": 1,
    "rationale": "Neonates cannot shiver and rely on non-shivering thermogenesis, metabolizing brown (adipose) fat present at birth. This is a key driver of newborn thermoregulation."
  },
  {
    "id": 125, "topic": "Thermoregulation",
    "question": "Which patient is at the HIGHEST risk for impaired thermoregulation, and why?",
    "options": ["A healthy 25-year-old", "A newborn, due to a large body surface area, limited subcutaneous fat, and inability to shiver", "A 40-year-old athlete", "A 30-year-old office worker"],
    "answer": 1,
    "rationale": "Newborns have a large surface-area-to-mass ratio, limited subcutaneous fat, lose 4x more heat than adults, and cannot shiver - relying on brown fat. Older adults are also high risk."
  },
  {
    "id": 126, "topic": "Thermoregulation",
    "question": "Why are older adults at increased risk for impaired thermoregulation?",
    "options": ["They shiver excessively", "They have less thermoregulatory control, loss of subcutaneous fat, and may have CNS disorders", "They have excess brown fat", "Their metabolism is always elevated"],
    "answer": 1,
    "rationale": "Older adults have reduced thermoregulatory control, loss of subcutaneous insulating fat, and greater sensitivity, compounded by illness, CNS disorders, and environmental factors."
  },
  {
    "id": 127, "topic": "Thermoregulation",
    "question": "A nurse applies an ice pack to the axilla and groin of a hyperthermic patient. Which type of heat loss is being maximized, and why these sites?",
    "options": ["Radiation; they are the warmest surfaces", "Conduction; large blood vessels lie close to the skin there", "Evaporation; they sweat the most", "Convection; air moves fastest there"],
    "answer": 1,
    "rationale": "Ice packs cool by conduction (direct contact). The axilla and groin have large superficial blood vessels, so cooling there efficiently lowers core temperature."
  },
  {
    "id": 128, "topic": "Thermoregulation",
    "question": "Which device would the nurse use to WARM a hypothermic patient using convective air?",
    "options": ["Ice pack", "Bair Hugger", "Cooling blanket", "Cold IV fluids"],
    "answer": 1,
    "rationale": "The Bair Hugger is a forced-air warming device that heats by convection. The Arctic Sun both heats and cools; a cooling blanket is for hyperthermia."
  },
  {
    "id": 129, "topic": "Thermoregulation",
    "question": "Heat production in the body is primarily a by-product of what process?",
    "options": ["Sweating", "Metabolism", "Vasodilation", "Evaporation"],
    "answer": 1,
    "rationale": "Heat production is a by-product of metabolism: increased metabolism produces more heat; decreased metabolism produces less. Basal metabolic rate reflects this."
  },
  {
    "id": 130, "topic": "Thermoregulation",
    "question": "What is shivering, and what role does it play in thermoregulation?",
    "options": ["A voluntary act that cools the body", "An involuntary muscle response to temperature differences that generates heat", "A method of heat loss", "A sign only of hyperthermia"],
    "answer": 1,
    "rationale": "Shivering is an involuntary muscle response to temperature differences that generates heat. Neonates cannot shiver and instead use brown fat."
  },
  {
    "id": 131, "topic": "Thermoregulation",
    "question": "A nurse teaches an athlete to prevent heat-related illness. Which instruction is correct?",
    "options": ["Avoid drinking fluids during exercise", "Drink water before, during, and after exercise and avoid strenuous activity in hot, humid, poorly ventilated conditions", "Exercise in the hottest part of the day", "Wear heavy dark clothing to sweat more"],
    "answer": 1,
    "rationale": "Prevent heat illness by hydrating before/during/after activity, avoiding strenuous exercise in hot humid or poorly ventilated areas, and recognizing risks for infants and the elderly."
  },
  {
    "id": 132, "topic": "Thermoregulation",
    "question": "A patient with heat stroke needs emergency cooling. Which combination of interventions is appropriate?",
    "options": ["Warm blankets and hot fluids", "Move to a cool environment, remove clothing, apply cool wet towels, use fans, give cooled IV fluids, and monitor telemetry for dysrhythmias", "Encourage exercise to sweat", "Restrict all fluids"],
    "answer": 1,
    "rationale": "Heat stroke is an emergency: rapid active cooling (cool environment, remove clothing, cool wet towels, fans for convection, cooled IV fluids, cooling blankets, 100% oxygen) and telemetry for dysrhythmias."
  },
  {
    "id": 133, "topic": "Thermoregulation",
    "question": "Which patient statement indicates a need for more teaching about hypothermia prevention?",
    "options": ["\"I'll keep my home adequately heated in winter.\"", "\"I'll dress in warm, dry layers.\"", "\"A few alcoholic drinks will help keep me warm outdoors.\"", "\"I'll check on my elderly neighbor in cold weather.\""],
    "answer": 2,
    "rationale": "Alcohol causes vasodilation and impaired judgment, increasing hypothermia risk. Prevention includes adequate heating, dry warm clothing, and extra caution for infants, elderly, and those using alcohol."
  },
  {
    "id": 134, "topic": "Thermoregulation",
    "question": "A patient is admitted with frostbite of the toes. Which intervention is correct?",
    "options": ["Vigorously rub and massage the toes", "Rapidly rewarm in 104-105 F circulating water for 20-30 minutes without rubbing", "Apply direct dry heat from a space heater", "Delay warming to prevent pain"],
    "answer": 1,
    "rationale": "Frostbite is treated by rapid rewarming in 104-105 F circulating water for 20-30 minutes. Do not rub or massage, which worsens tissue damage; rapid thawing reduces necrosis."
  },
  {
    "id": 135, "topic": "Thermoregulation",
    "question": "Which body areas are most commonly affected by frostbite?",
    "options": ["Chest and abdomen", "Ear lobes, tip of the nose, fingers, and toes", "Thighs and back", "Shoulders and hips"],
    "answer": 1,
    "rationale": "Frostbite most often affects the ear lobes, nose tip, fingers, and toes, where ice crystals form in cells causing circulatory and tissue damage."
  },
  {
    "id": 136, "topic": "Thermoregulation",
    "question": "Which represents normothermia (normal body temperature range)?",
    "options": ["34-35 C (93-95 F)", "36-38 C (96.8-100.4 F)", "39-40 C (102-104 F)", "41-42 C (105-107 F)"],
    "answer": 1,
    "rationale": "Normothermia is 36-38 C (96.8-100.4 F), with an average oral/tympanic temperature of 98.6 F."
  },
  {
    "id": 137, "topic": "Thermoregulation",
    "question": "A nurse explains the difference between core and surface body temperature. Which statement is correct?",
    "options": ["Core temperature varies widely with the environment", "Core temperature stays relatively constant; surface temperature varies with skin blood flow and the environment", "Surface temperature is always higher than core", "They are always identical"],
    "answer": 1,
    "rationale": "Core temperature (heart, brain, liver, kidneys) remains relatively constant, while surface temperature varies with skin blood flow and environmental heat exchange."
  },
  {
    "id": 138, "topic": "Thermoregulation",
    "question": "Which nursing action for a hypothermic patient uses conduction to add heat?",
    "options": ["Placing a fan near the patient", "Applying warm packs and heated blankets in direct contact with the skin", "Opening a window", "Removing all coverings"],
    "answer": 1,
    "rationale": "Warm packs and heated blankets in direct contact transfer heat to the body by conduction, an appropriate rewarming method for hypothermia."
  },
  {
    "id": 139, "topic": "Thermoregulation",
    "question": "Which is an antecedent (prerequisite) for normal thermoregulation?",
    "options": ["Active infection", "A normally functioning hypothalamus, normal sweat gland function, adequate fluid intake, and (in newborns) brown fat", "Absent sweat glands", "Severe dehydration"],
    "answer": 1,
    "rationale": "Antecedents include a normal hypothalamus, chemical thermogenesis, normal sweat gland and skeletal muscle function, sufficient blood flow, newborn brown fat, adequate fluids, and being infection-free."
  },
  {
    "id": 140, "topic": "Thermoregulation",
    "question": "A nurse must prioritize care for a patient with a temperature of 106 F, confusion, and hot dry skin. What is the FIRST action?",
    "options": ["Give an oral antipyretic and recheck in 4 hours", "Begin immediate active cooling and notify the provider, as this is heat stroke", "Encourage the patient to rest quietly", "Apply warm blankets"],
    "answer": 1,
    "rationale": "This is heat stroke, a life-threatening emergency. The nurse's priority is immediate active cooling (remove clothing, cool towels, fans, cooled IV fluids) and rapid provider notification/monitoring."
  },
  {
    "id": 141, "topic": "Thermoregulation",
    "question": "The POSTERIOR hypothalamus responds to cold by driving heat production through which mechanism?",
    "options": ["Sweating", "Vasoconstriction and muscle contraction (shivering)", "Vasodilation", "Inhibiting metabolism"],
    "answer": 1,
    "rationale": "The posterior hypothalamus (like a heater) drives heat production via vasoconstriction and voluntary/involuntary muscle contraction (shivering)."
  },
  {
    "id": 142, "topic": "Thermoregulation",
    "question": "A patient's fever is being reduced with a cooling blanket placed against the skin. Which type of heat loss is primarily used?",
    "options": ["Radiation", "Conduction", "Convection", "Metabolism"],
    "answer": 1,
    "rationale": "A cooling blanket in direct skin contact removes heat by conduction, transferring heat from the warmer body to the cooler surface."
  },
  {
    "id": 143, "topic": "Thermoregulation",
    "question": "A nurse evaluates whether a temperature goal was met. Which statement reflects the EVALUATION step for a SMART thermoregulation goal?",
    "options": ["The patient looks comfortable", "One hour after the antipyretic, the oral temperature is 99.0 F, showing the goal of normal range was partially met", "The patient will get better", "The nurse hopes the fever resolves"],
    "answer": 1,
    "rationale": "Evaluation measures the outcome against the SMART goal at the specified time. Comparing the actual temperature to the target range within the time frame is proper evaluation."
  },
  {
    "id": 144, "topic": "Thermoregulation",
    "question": "A patient with heat exhaustion is treated. Which finding indicates the interventions were effective?",
    "options": ["Continued extreme thirst and tachycardia", "Restored fluid/electrolyte balance with normal heart rate, moist mucous membranes, and adequate urine output", "Hot, dry skin and confusion", "Decreased level of consciousness"],
    "answer": 1,
    "rationale": "Effective treatment of heat exhaustion restores fluid and electrolyte balance: normal HR, moist mucous membranes, and adequate urine output. Worsening signs suggest progression to heat stroke."
  },
  {
    "id": 145, "topic": "Thermoregulation",
    "question": "Which patient requires the nurse's IMMEDIATE attention?",
    "options": ["A patient with heat exhaustion who is alert and drinking fluids", "A surgical patient with rapidly rising temperature, muscle rigidity, and rising end-tidal CO2", "A patient with a temperature of 99.1 F after activity", "A patient shivering slightly after a cool shower"],
    "answer": 1,
    "rationale": "Rapidly rising temperature with muscle rigidity and rising end-tidal CO2 signals malignant hyperthermia, a life-threatening emergency requiring immediate dantrolene and cooling."
  },
  {
    "id": 146, "topic": "Thermoregulation",
    "question": "Which set correctly lists the FOUR types of heat loss the nurse considers when managing temperature?",
    "options": ["Radiation, conduction, convection, evaporation", "Conduction, diffusion, osmosis, filtration", "Radiation, respiration, perspiration, digestion", "Convection, contraction, constriction, circulation"],
    "answer": 0,
    "rationale": "The four types of heat loss are radiation, conduction, convection, and evaporation - central to planning cooling or warming interventions."
  },
  {
    "id": 147, "topic": "Thermoregulation",
    "question": "A hypothermic patient's temperature has risen from 90 F to 96 F after rewarming, and shivering has resolved. How should the nurse interpret this?",
    "options": ["The interventions are worsening the condition", "The rewarming interventions were effective; continue to monitor", "The patient now has hyperthermia", "Rewarming should be stopped and reversed"],
    "answer": 1,
    "rationale": "A rise to 96 F (approaching normothermia) with resolution of symptoms indicates effective rewarming. The nurse continues monitoring and evaluating against the goal."
  },
  {
    "id": 148, "topic": "Thermoregulation",
    "question": "A malignant hyperthermia crisis is occurring. In addition to dantrolene and 100% oxygen, which intervention is appropriate?",
    "options": ["Administer a calcium channel blocker", "Provide active cooling and insert a foley catheter to monitor for myoglobin in the urine", "Apply warm blankets", "Delay transfer to the ICU"],
    "answer": 1,
    "rationale": "MH management includes stopping anesthesia, dantrolene, 100% oxygen, active cooling, monitoring for myoglobinuria (foley catheter), correcting electrolytes, and ICU transfer. Calcium channel blockers are avoided."
  },
  {
    "id": 149, "topic": "Thermoregulation",
    "question": "A nurse plans a SMART intervention for a hyperthermic patient. Which is the most appropriate MEASURABLE implementation with evaluation?",
    "options": ["Cool the patient sometime today", "Administer the ordered antipyretic and apply a cooling blanket, then recheck the temperature in 1 hour", "Hope the fever comes down", "Remove blankets whenever convenient"],
    "answer": 1,
    "rationale": "A SMART implementation is specific, measurable, and time-bound: give the antipyretic, apply cooling, and reassess temperature at a defined time (1 hour) to evaluate effectiveness."
  },
  {
    "id": 150, "topic": "Thermoregulation",
    "question": "A patient recovering from heat stroke asks how to prevent recurrence. Which teaching should the nurse prioritize?",
    "options": ["Exercise vigorously in hot, humid weather", "Avoid strenuous activity in hot humid weather, hydrate before/during/after activity, and recognize early warning signs", "Restrict fluids to avoid overload", "Wear heavy clothing outdoors in heat"],
    "answer": 1,
    "rationale": "Prevention of heat illness includes avoiding strenuous activity in hot humid weather, hydrating before/during/after activity, ensuring ventilation, and recognizing early signs, with special caution for infants and older adults."
  }
];
