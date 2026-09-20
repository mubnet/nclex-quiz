// 150 NCLEX-style multiple choice questions
// Rebuilt from ALL THREE source materials:
//   1. 11430_study_guide.docx (Human Development, Mobility, Thermoregulation)
//   2. Human_Growth_And_Development.pptx (70 slides)
//   3. Mobility.pdf
// Standard NCLEX nursing knowledge used only to phrase items within these domains.
const QUESTION_BANK = [
  // ============================================================
  // HUMAN DEVELOPMENT  (ids 1-55)
  // ============================================================
  {
    "id": 1, "topic": "Human Development",
    "question": "A nurse is caring for a 4-year-old who says, \"I got sick because I was bad.\" Which developmental concept best explains this statement?",
    "options": ["Object permanence", "Magical thinking", "Conservation", "Abstract reasoning"],
    "answer": 1,
    "rationale": "Preschoolers (Piaget's preoperational stage) exhibit magical thinking and may see illness as punishment. Give simple, honest explanations and avoid scary words."
  },
  {
    "id": 2, "topic": "Human Development",
    "question": "According to Erikson, which psychosocial task is the priority for an 18-month-to-3-year-old toddler?",
    "options": ["Trust vs. mistrust", "Initiative vs. guilt", "Autonomy vs. shame and doubt", "Industry vs. inferiority"],
    "answer": 2,
    "rationale": "Autonomy vs. shame and doubt spans 18 months to 3 years. Encourage independence with toilet training and limited choices."
  },
  {
    "id": 3, "topic": "Human Development",
    "question": "At which age is an infant typically expected to sit alone WITHOUT support?",
    "options": ["5 months", "6 months", "7 months", "9 months"],
    "answer": 2,
    "rationale": "An infant sits with support at 6 months and sits alone without support at 7 months."
  },
  {
    "id": 4, "topic": "Human Development",
    "question": "According to Piaget, object permanence typically develops at approximately what age?",
    "options": ["1 month", "9 months", "2 years", "7 years"],
    "answer": 1,
    "rationale": "Object permanence (objects exist even when not seen) develops around 9 months during the sensorimotor stage (birth-2 years)."
  },
  {
    "id": 5, "topic": "Human Development",
    "question": "A confused older adult has an acute onset over hours, a fluctuating course, and clouded consciousness. Which condition is most consistent?",
    "options": ["Dementia", "Depression", "Delirium", "Normal aging"],
    "answer": 2,
    "rationale": "Delirium has acute onset (hours-days), a fluctuating course, altered consciousness, and is usually reversible. It requires immediate medical attention."
  },
  {
    "id": 6, "topic": "Human Development",
    "question": "Using Maslow's hierarchy, which patient need should the nurse address FIRST?",
    "options": ["Encouraging the patient to join a support group", "Maintaining a patent airway and adequate oxygenation", "Reassuring the patient they are safe", "Praising the patient for meeting a goal"],
    "answer": 1,
    "rationale": "Physiological needs (air, water, food, shelter, sleep) form the base of Maslow's hierarchy and take priority. Lower-level needs must be met before higher levels."
  },
  {
    "id": 7, "topic": "Human Development",
    "question": "A nurse reviews an older adult's list of 11 daily medications. What is this called, and the priority action?",
    "options": ["Ageism; examine personal biases", "Polypharmacy; review medications and assess for interactions", "Adherence; increase the doses", "Titration; discontinue all medications"],
    "answer": 1,
    "rationale": "Polypharmacy is the use of multiple medications, more than clinically necessary. Review medications and assess for interactions, adverse effects, and nonadherence."
  },
  {
    "id": 8, "topic": "Human Development",
    "question": "Which principle of development describes the head-to-toe pattern of motor control?",
    "options": ["Proximodistal", "Cephalocaudal", "Simple to complex", "Continuous process"],
    "answer": 1,
    "rationale": "Cephalocaudal means head to toe (head control precedes sitting, which precedes walking). Proximodistal is center outward."
  },
  {
    "id": 9, "topic": "Human Development",
    "question": "A child gains trunk control before fine hand dexterity. Which developmental principle does this illustrate?",
    "options": ["Cephalocaudal", "Proximodistal", "Orderly and sequential", "Continuous process"],
    "answer": 1,
    "rationale": "Proximodistal development proceeds from the center outward: trunk control develops before hand dexterity."
  },
  {
    "id": 10, "topic": "Human Development",
    "question": "According to Freud, which structure of personality represents the conscience?",
    "options": ["Id", "Ego", "Superego", "Libido"],
    "answer": 2,
    "rationale": "The superego performs regulating, restraining, and prohibiting actions - the conscience, influenced by outside societal standards."
  },
  {
    "id": 11, "topic": "Human Development",
    "question": "In Freud's theory, which structure demands that an infant's needs be met immediately?",
    "options": ["Ego", "Superego", "Id", "Conscience"],
    "answer": 2,
    "rationale": "The id is the most primitive part of personality, originating in infancy; infants cannot wait and must have needs met immediately."
  },
  {
    "id": 12, "topic": "Human Development",
    "question": "Which Freudian structure is the reality component that mediates conflicts and regulates impulses?",
    "options": ["Id", "Ego", "Superego", "Unconscious"],
    "answer": 1,
    "rationale": "The ego is the reality component; it mediates conflicts between the environment and the id, judges reality, and regulates impulses (one's sense of self)."
  },
  {
    "id": 13, "topic": "Human Development",
    "question": "A 30-year-old is working to form lasting intimate relationships. Which Erikson stage is this?",
    "options": ["Identity vs. role confusion", "Intimacy vs. isolation", "Generativity vs. stagnation", "Ego integrity vs. despair"],
    "answer": 1,
    "rationale": "Intimacy vs. isolation (about 20-35 years) involves forming intimate relationships. Failure leads to isolation."
  },
  {
    "id": 14, "topic": "Human Development",
    "question": "A 70-year-old reflects on life with satisfaction. Which Erikson stage has been resolved positively?",
    "options": ["Generativity vs. stagnation", "Intimacy vs. isolation", "Ego integrity vs. despair", "Industry vs. inferiority"],
    "answer": 2,
    "rationale": "Ego integrity vs. despair (65+ years) involves reflecting on life with satisfaction (integrity) rather than regret (despair)."
  },
  {
    "id": 15, "topic": "Human Development",
    "question": "A teenager refuses the clothes his mother bought and insists on dressing like his classmates. This reflects which Erikson stage?",
    "options": ["Autonomy vs. shame and doubt", "Trust vs. mistrust", "Identity vs. role confusion", "Initiative vs. guilt"],
    "answer": 2,
    "rationale": "An adolescent seeking to fit in with peers is developing a sense of self, characteristic of identity vs. role confusion (about 12-20 years)."
  },
  {
    "id": 16, "topic": "Human Development",
    "question": "Which Kohlberg level is characterized by obedience to avoid punishment and self-interest?",
    "options": ["Preconventional", "Conventional", "Postconventional", "Transconventional"],
    "answer": 0,
    "rationale": "Kohlberg's preconventional level (toddler to school age) is driven by obedience to avoid punishment and self-interest."
  },
  {
    "id": 17, "topic": "Human Development",
    "question": "At what age would the nurse expect an infant to say \"mama\" and \"dada\" with meaning?",
    "options": ["4 months", "6 months", "8 months", "12 months"],
    "answer": 2,
    "rationale": "An infant says 'mama' and 'dada' at about 8 months. Monosyllables with meaning (1-2 words) appear around 12 months."
  },
  {
    "id": 18, "topic": "Human Development",
    "question": "At what age does an infant typically demonstrate a pincer grasp?",
    "options": ["5 months", "7 months", "9 months", "12 months"],
    "answer": 2,
    "rationale": "The pincer grasp (picking up items with thumb and one finger) develops at about 9 months."
  },
  {
    "id": 19, "topic": "Human Development",
    "question": "Which characteristic best describes the fine motor skills of a 5-month-old infant?",
    "options": ["Transfers objects from one hand to another", "Crude pincer grasp", "Builds a tower of two cubes", "Grasps an object voluntarily with one hand"],
    "answer": 3,
    "rationale": "At 5 months an infant grasps objects voluntarily with one hand. Transferring objects is 7 months, pincer grasp 9 months, and a two-cube tower 18 months."
  },
  {
    "id": 20, "topic": "Human Development",
    "question": "A parent asks when their child should be able to ride a tricycle. What is the correct age?",
    "options": ["2 years", "3 years", "4 years", "5 years"],
    "answer": 1,
    "rationale": "At 3 years a child can ride a tricycle and climb stairs alternating steps."
  },
  {
    "id": 21, "topic": "Human Development",
    "question": "A social smile is expected to appear at which age?",
    "options": ["2 months", "4 months", "6 months", "8 months"],
    "answer": 0,
    "rationale": "The social smile appears at about 2 months as an early social/adaptive milestone."
  },
  {
    "id": 22, "topic": "Human Development",
    "question": "A guardian of a 2-year-old shows understanding of expected development with which statement?",
    "options": ["My child should ride a tricycle", "My child should be able to turn a doorknob", "My child should speak about 200 words", "My child should copy a triangle"],
    "answer": 1,
    "rationale": "A 2-year-old can turn a doorknob and build a tower of 6 cubes. Tricycle riding and copying a triangle come later (3 and 5 years)."
  },
  {
    "id": 23, "topic": "Human Development",
    "question": "A 3-year-old is expected to demonstrate which fine motor skill?",
    "options": ["Copy a diamond", "Copy a triangle", "Copy a circle and build a tower of 9 cubes", "Copy a cube"],
    "answer": 2,
    "rationale": "At 3 years a child can copy a circle and cross, build a tower of 9 cubes, and dress/undress. A cube is 4 years, triangle 5 years, diamond 6 years."
  },
  {
    "id": 24, "topic": "Human Development",
    "question": "Which developmental screening tool is used specifically for young children?",
    "options": ["Mini-mental status examination", "The Denver II", "Menopause rating scale", "Braden Scale"],
    "answer": 1,
    "rationale": "The Denver II is a developmental assessment tool for children. The mini-mental status exam assesses cognition; MRS is for menopause; Braden is for pressure injury risk."
  },
  {
    "id": 25, "topic": "Human Development",
    "question": "Which finding constitutes abnormal development rather than a normal variation?",
    "options": ["A temporary lag in one milestone", "Failing to meet a milestone that 95% of same-age, same-gender peers meet", "Developing at a slightly slower but steady rate", "Reaching milestones early"],
    "answer": 1,
    "rationale": "Abnormal development is failing to meet a milestone met by 95% of the same-age, same-gender population. A temporary lag is not a delay; a delay is a symptom, not a diagnosis."
  },
  {
    "id": 26, "topic": "Human Development",
    "question": "Which statement about a developmental delay is TRUE?",
    "options": ["It is a diagnosis in itself", "It is a symptom, not a diagnosis", "It always indicates permanent impairment", "It is the same as a temporary lag"],
    "answer": 1,
    "rationale": "A developmental delay is a symptom, not a diagnosis, and requires further evaluation to identify a cause."
  },
  {
    "id": 27, "topic": "Human Development",
    "question": "A nurse caring for a hospitalized toddler should anticipate which behavior?",
    "options": ["Cooperative acceptance of all procedures", "Temper tantrums and a need for autonomy", "Concern about body image and peers", "Fear of loss of independence"],
    "answer": 1,
    "rationale": "Toddlers commonly have temper tantrums. Promote autonomy with limited choices, ensure safety, and assess toilet-training readiness."
  },
  {
    "id": 28, "topic": "Human Development",
    "question": "When communicating with a hospitalized toddler, which technique is most appropriate?",
    "options": ["Give lengthy scientific explanations", "Offer simple choices such as 'the red or blue cup' and allow a comfort object", "Speak only to the parents", "Discourage comfort objects"],
    "answer": 1,
    "rationale": "Toddlers benefit from simple words, choices that give an illusion of control, a comfort object, and being met at eye level."
  },
  {
    "id": 29, "topic": "Human Development",
    "question": "A nurse must describe a procedure to a preschooler. Which wording is best?",
    "options": ["We are going to cut you open", "We will make a small opening", "You need major abdominal surgery", "The incision requires general anesthesia"],
    "answer": 1,
    "rationale": "Preschoolers fear body harm and think concretely. Avoid words like 'cut'; say 'small opening,' use play and drawings, and keep explanations simple."
  },
  {
    "id": 30, "topic": "Human Development",
    "question": "When caring for an adolescent (12-20 years), which nursing approach is most appropriate?",
    "options": ["Speak only to the parents", "Respect privacy and confidentiality; speak directly to the teen", "Discourage peer involvement", "Avoid discussing body image"],
    "answer": 1,
    "rationale": "Adolescents need privacy, respect, and independence. Speak directly to the teen, respect confidentiality, and assess body image, peer pressure, substance use, and suicide risk."
  },
  {
    "id": 31, "topic": "Human Development",
    "question": "Which nursing responsibility is most appropriate for a school-age child (6-12 years)?",
    "options": ["Assess for suicide risk and sexual behavior", "Promote body image, peer group formation, and independence; teach nutrition and exercise", "Focus only on nonverbal reassurance", "Provide only illusion-of-control choices"],
    "answer": 1,
    "rationale": "School-age nursing care addresses body image, peer group formation, promoting independence, identifying stressors, and teaching good nutrition, exercise, and accident prevention."
  },
  {
    "id": 32, "topic": "Human Development",
    "question": "The 'neonatal' period covers which time frame?",
    "options": ["Birth to 7 days", "Birth to 1 month", "1 month to 1 year", "1 to 3 years"],
    "answer": 1,
    "rationale": "Neonatal is birth to 1 month. Newborn is birth to 7 days; infant is 1 month to 1 year."
  },
  {
    "id": 33, "topic": "Human Development",
    "question": "A 7-year-old can understand conservation and think logically about concrete events. Which Piaget stage is this?",
    "options": ["Sensorimotor", "Preoperational", "Concrete operational", "Formal operational"],
    "answer": 2,
    "rationale": "Concrete operational (7-11 years) involves improved logic and conservation (quantity stays the same despite change in appearance)."
  },
  {
    "id": 34, "topic": "Human Development",
    "question": "In Piaget's preoperational stage, a child attributes human qualities to a stuffed animal. This is called:",
    "options": ["Conservation", "Animism", "Object permanence", "Egocentrism"],
    "answer": 1,
    "rationale": "Animism (giving human qualities to inanimate objects) is characteristic of the preoperational stage, along with egocentrism and rapid language development."
  },
  {
    "id": 35, "topic": "Human Development",
    "question": "Which feature most distinguishes dementia from delirium?",
    "options": ["Acute onset over hours", "Clouded consciousness early", "Gradual, progressive, irreversible decline", "Complete reversibility within days"],
    "answer": 2,
    "rationale": "Dementia has a gradual onset with progressive, irreversible decline and consciousness clear until late stages. Delirium is acute and usually reversible."
  },
  {
    "id": 36, "topic": "Human Development",
    "question": "Which is a common type of dementia?",
    "options": ["Alzheimer's disease", "Delirium tremens", "Major depressive disorder", "Generalized anxiety disorder"],
    "answer": 0,
    "rationale": "Common types of dementia include Alzheimer's disease, vascular dementia, and Lewy body dementia. Dementia is chronic, progressive, and not a normal part of aging."
  },
  {
    "id": 37, "topic": "Human Development",
    "question": "A nurse suspects depression rather than dementia in an older adult. Which finding supports depression?",
    "options": ["Irreversible memory loss", "Sadness, hopelessness, social withdrawal, and appetite/sleep changes", "Hallucinations with clouded consciousness", "Onset over hours to days"],
    "answer": 1,
    "rationale": "Depression presents with persistent sadness, hopelessness, loss of interest, fatigue, and appetite/sleep changes. It is common but underdiagnosed in older adults."
  },
  {
    "id": 38, "topic": "Human Development",
    "question": "A nurse recognizes that untreated depression in an older adult can lead to which serious consequence?",
    "options": ["It always resolves on its own", "It may worsen medical conditions and increase suicide risk", "It improves cognition", "It has no effect on physical health"],
    "answer": 1,
    "rationale": "Untreated depression can seriously affect physical health, exacerbate other conditions, and increase suicide risk."
  },
  {
    "id": 39, "topic": "Human Development",
    "question": "A nurse wants to combat ageism. Which action is most appropriate?",
    "options": ["Assume older adults cannot learn", "Assess one's own attitude and work toward a positive view of aging", "Treat all older adults as frail", "Avoid teaching older patients"],
    "answer": 1,
    "rationale": "To combat ageism, nurses assess their own attitudes and work toward a positive view of aging and older adults' health care needs."
  },
  {
    "id": 40, "topic": "Human Development",
    "question": "Which factor is an antecedent (prerequisite) for normal human development?",
    "options": ["Chronic illness", "Good nutritional status and a healthy environment", "Social isolation", "Prematurity"],
    "answer": 1,
    "rationale": "Antecedents of normal development include normal genetic factors, good nutritional status, a healthy environment, and good health status."
  },
  {
    "id": 41, "topic": "Human Development",
    "question": "A nurse teaches parents that a child should walk without support at approximately which age?",
    "options": ["9 months", "11 months", "13 months", "18 months"],
    "answer": 2,
    "rationale": "A child walks without support at about 13 months. At 11 months they walk with support; at 12 months they take a few steps."
  },
  {
    "id": 42, "topic": "Human Development",
    "question": "According to Freud, fixation in the anal stage may result in which trait?",
    "options": ["Overeating and smoking", "Anal retentive (rigid/orderly) or anal expulsive (messy/defiant) traits", "Vanity and sexual dysfunction", "Same-sex friendship preference"],
    "answer": 1,
    "rationale": "Anal-stage fixation can lead to anal retentive (rigid/orderly) or anal expulsive (messy/defiant) personality traits."
  },
  {
    "id": 43, "topic": "Human Development",
    "question": "Which intervention best supports an infant's development during hospitalization?",
    "options": ["Encourage independent decisions", "Ensure parental presence, use gentle touch and a calm voice, and maintain immunizations", "Provide written instructions to the infant", "Discourage parental bonding"],
    "answer": 1,
    "rationale": "Infants need parental presence, nonverbal reassurance (soft voice, gentle touch, holding), immunizations per schedule, and safety; they experience stranger and separation anxiety."
  },
  {
    "id": 44, "topic": "Human Development",
    "question": "A middle adult (35-65) presents for a wellness visit. Which Erikson stage applies?",
    "options": ["Intimacy vs. isolation", "Generativity vs. stagnation", "Identity vs. role confusion", "Ego integrity vs. despair"],
    "answer": 1,
    "rationale": "Middle adults are in generativity vs. stagnation. Care focuses on wellness evaluation, healthy habits, stress reduction, routine screening, and STD avoidance."
  },
  {
    "id": 45, "topic": "Human Development",
    "question": "Which psychosocial concern is most relevant when planning care for an older adult (65+)?",
    "options": ["Toilet-training readiness", "Loss related to retirement and social isolation", "School violence screening", "Body image and peer pressure"],
    "answer": 1,
    "rationale": "Older adults face psychosocial concerns of loss - retirement (reduced income) and social isolation. Care emphasizes safety, dignity, nutrition, and cognitive activities."
  },
  {
    "id": 46, "topic": "Human Development",
    "question": "Which nursing responsibility is most appropriate for a preschooler (3-6 years)?",
    "options": ["Provide sex education and address peer group formation", "Address bedtime problems and enuresis, teach address/phone number, and encourage expression of feelings", "Foster independence while respecting confidentiality", "Assess for suicide risk"],
    "answer": 1,
    "rationale": "For preschoolers, address bedtime problems (night waking, enuresis), teach address/phone number and stranger safety, and encourage the child to express feelings."
  },
  {
    "id": 47, "topic": "Human Development",
    "question": "Which condition can place a child at risk for altered development?",
    "options": ["Adequate nutrition", "Autism spectrum disorder", "Consistent caregiving", "Meeting milestones on time"],
    "answer": 1,
    "rationale": "Autism spectrum disorder, ADHD, learning/intellectual disabilities, and mood/anxiety disorders are among conditions that place children at risk for altered development."
  },
  {
    "id": 48, "topic": "Human Development",
    "question": "A nurse tailors teaching to a patient's developmental level. This reflects which principle?",
    "options": ["Ignoring health literacy", "Using age-appropriate language and materials based on cognitive and developmental stage", "Giving every patient identical materials", "Teaching only the family"],
    "answer": 1,
    "rationale": "Nurses tailor communication and education to the developmental level, using age-appropriate language and materials and accounting for differing health literacy."
  },
  {
    "id": 49, "topic": "Human Development",
    "question": "Which factor is known to influence growth and development?",
    "options": ["Only heredity", "Heredity, nutrition, environment, and socioeconomic status", "Only prenatal factors", "Only gender"],
    "answer": 1,
    "rationale": "Many factors influence development: heredity, nutrition, environment, socioeconomic status, health status, hormones, and cultural and family factors."
  },
  {
    "id": 50, "topic": "Human Development",
    "question": "A 3-year-old's speech is assessed. Which is an expected finding?",
    "options": ["Only vowel sounds", "Says mama and dada", "Good vocabulary, long sentences, tells a story", "Speaks 10 words with meaning"],
    "answer": 2,
    "rationale": "By 3 years a child has a good vocabulary, speaks in long sentences, and can tell a story."
  },
  {
    "id": 51, "topic": "Human Development",
    "question": "Which Erikson stage applies to a school-age child (6-12 years)?",
    "options": ["Initiative vs. guilt", "Industry vs. inferiority", "Identity vs. role confusion", "Autonomy vs. shame and doubt"],
    "answer": 1,
    "rationale": "School-age children are in industry vs. inferiority, gaining competence through achievement and learning."
  },
  {
    "id": 52, "topic": "Human Development",
    "question": "A young adult (20-35) is a client. Which is a developmentally appropriate focus?",
    "options": ["Toilet training", "Stable employment, healthy relationships, and work-life balance", "Kyphosis prevention", "Retirement planning for isolation"],
    "answer": 1,
    "rationale": "Young adults focus on stable employment/financial security, higher education, healthy relationships, emotional well-being, and work-life balance."
  },
  {
    "id": 53, "topic": "Human Development",
    "question": "During the sensorimotor stage, an infant learns primarily through:",
    "options": ["Abstract hypothetical reasoning", "Sensory experiences and motor skills", "Conservation tasks", "Logical thinking about concrete events"],
    "answer": 1,
    "rationale": "In the sensorimotor stage (birth-2 years), infants learn through sensory experiences and motor activity and develop object permanence."
  },
  {
    "id": 54, "topic": "Human Development",
    "question": "Formal operational thinking (11+ years) is characterized by:",
    "options": ["Egocentrism and animism", "Object permanence", "Abstract thinking and hypothetical reasoning", "Simple reflexes"],
    "answer": 2,
    "rationale": "Formal operations involve abstract thinking, hypothetical reasoning, and the capacity for moral and ethical reasoning."
  },
  {
    "id": 55, "topic": "Human Development",
    "question": "A nurse performs a holistic developmental assessment. Which domains should be included?",
    "options": ["Only physical growth", "Cognitive, emotional, social, and physical development", "Only cognitive development", "Only social skills"],
    "answer": 1,
    "rationale": "A holistic nursing assessment evaluates cognitive, emotional, social, and physical development, using milestones as a reference to identify deviations."
  },
  // ============================================================
  // MOBILITY  (ids 56-115)
  // ============================================================
  {
    "id": 56, "topic": "Mobility",
    "question": "Which intervention best prevents footdrop in an immobile patient?",
    "options": ["Turning the patient every 2 hours", "Using an ankle-foot orthosis (AFO) brace, footboard, and ankle ROM exercises", "Applying sequential compression devices", "Encouraging incentive spirometry"],
    "answer": 1,
    "rationale": "Footdrop is a plantar flexion contracture. Prevent it with an AFO brace, footboard or high-top sneakers, and ankle ROM exercises."
  },
  {
    "id": 57, "topic": "Mobility",
    "question": "Which set of factors makes up Virchow's Triad?",
    "options": ["Pain, pallor, paralysis", "Stasis, endothelial injury, hypercoagulability", "Fever, tachycardia, hypotension", "Radiation, conduction, convection"],
    "answer": 1,
    "rationale": "Virchow's Triad = venous stasis, endothelial injury, and hypercoagulability, which contribute to DVT."
  },
  {
    "id": 58, "topic": "Mobility",
    "question": "A pressure injury shows non-blanchable erythema of intact skin. How should the nurse stage it?",
    "options": ["Stage 1", "Stage 2", "Stage 3", "Unstageable"],
    "answer": 0,
    "rationale": "Stage 1 is non-blanchable erythema of intact skin. Stage 2 involves partial-thickness loss with exposed dermis."
  },
  {
    "id": 59, "topic": "Mobility",
    "question": "A postoperative patient has increasing pain, paresthesia, pallor, and a pulseless extremity. Which emergency is suspected?",
    "options": ["Fat embolism syndrome", "Deep vein thrombosis", "Compartment syndrome", "Disuse osteoporosis"],
    "answer": 2,
    "rationale": "The 6 P's (Pain, Pressure, Paresthesia, Pallor, Paralysis, Pulselessness) indicate compartment syndrome, a surgical emergency requiring fasciotomy."
  },
  {
    "id": 60, "topic": "Mobility",
    "question": "After a total hip replacement (posterior approach), which instruction prevents prosthetic dislocation?",
    "options": ["Cross your legs at the knees when seated", "Avoid flexing the hip more than 90 degrees", "Turn your toes inward when standing", "Sit in low, soft chairs"],
    "answer": 1,
    "rationale": "Hip precautions: avoid flexion greater than 90 degrees, avoid adduction (crossing legs), and avoid internal rotation."
  },
  {
    "id": 61, "topic": "Mobility",
    "question": "Which finding is most consistent with osteoarthritis rather than an inflammatory arthritis?",
    "options": ["Morning stiffness lasting more than 1 hour", "Symmetric small-joint swelling with warmth", "Stiffness (gelling) after inactivity, worse with joint use", "Systemic fever and fatigue"],
    "answer": 2,
    "rationale": "Osteoarthritis is a noninflammatory degenerative joint disease. Pain worsens with joint use and improves with rest; the gelling phenomenon is stiffness after inactivity."
  },
  {
    "id": 62, "topic": "Mobility",
    "question": "Which instruction about cane use is correct?",
    "options": ["Hold the cane on the same side as the weak leg", "Hold the cane on the side opposite the weak leg and move it with the weak leg", "Going up stairs, lead with the weak leg first", "Going down stairs, lead with the good leg first"],
    "answer": 1,
    "rationale": "Use the cane on the non-affected (strong) side; the cane and weak leg move together. Up stairs: good leg first. Down stairs: bad leg and cane first."
  },
  {
    "id": 63, "topic": "Mobility",
    "question": "A patient is in Buck's traction before hip surgery. Which nursing action is appropriate?",
    "options": ["Rest the weights on the bed to reduce tension", "Remove the traction each shift for skin care", "Ensure weights hang freely and perform neurovascular checks every hour", "Keep the leg in adduction and internal rotation"],
    "answer": 2,
    "rationale": "In Buck's (skin) traction, weights must hang freely and never rest on the floor. Do not remove without an order; perform hourly neurovascular checks (6 P's)."
  },
  {
    "id": 64, "topic": "Mobility",
    "question": "According to the lecture, an average adult on bed rest loses muscle strength at approximately what rate?",
    "options": ["0.1% per day", "About 3% per day", "10% per day", "20% per day"],
    "answer": 1,
    "rationale": "An individual of average weight without chronic illness loses about 3% of muscle strength per day of bed rest; critically ill patients lose nearly 2% of skeletal muscle per day in the first ICU week."
  },
  {
    "id": 65, "topic": "Mobility",
    "question": "A patient with immobility develops collapse of alveoli from reduced lung expansion. Which complication is this?",
    "options": ["Hypostatic pneumonia", "Atelectasis", "Pulmonary embolism", "Orthostatic hypotension"],
    "answer": 1,
    "rationale": "Atelectasis is collapse of alveoli from decreased lung expansion. Prevent with incentive spirometry, deep breathing, coughing, and early mobility."
  },
  {
    "id": 66, "topic": "Mobility",
    "question": "Which intervention helps prevent hypostatic pneumonia in an immobile patient?",
    "options": ["Keep the patient flat and still", "Turn every 2 hours, elevate the HOB above 30 degrees, and encourage coughing/deep breathing", "Restrict fluids", "Apply a footboard"],
    "answer": 1,
    "rationale": "Hypostatic pneumonia results from pooling of secretions. Prevent by turning every 2 hours, elevating the head of bed, hydration, and coughing/deep breathing."
  },
  {
    "id": 67, "topic": "Mobility",
    "question": "A patient becomes dizzy and hypotensive within 3 minutes of standing after bed rest. Which intervention is appropriate?",
    "options": ["Have the patient stand quickly to adjust", "Dangle at the bedside, change positions gradually, and provide fluids", "Restrict fluid intake", "Keep the legs crossed while sitting"],
    "answer": 1,
    "rationale": "Orthostatic hypotension is a drop in BP within 3 minutes of rising. Manage with gradual position changes, dangling at the bedside, fluids, and monitoring vital signs."
  },
  {
    "id": 68, "topic": "Mobility",
    "question": "Which assessment tool is used to evaluate pressure injury risk?",
    "options": ["Denver II", "Braden Scale", "TUG test", "Glasgow Coma Scale"],
    "answer": 1,
    "rationale": "The Braden Scale (scores 6-23) identifies patients at high risk for pressure injury; a lower score means higher risk."
  },
  {
    "id": 69, "topic": "Mobility",
    "question": "A Braden Scale score of 14 indicates what?",
    "options": ["No risk for pressure injury", "The patient is at risk for pressure injury", "The wound is unstageable", "Full mobility"],
    "answer": 1,
    "rationale": "On the Braden Scale, a score of 18 or under indicates at risk for pressure injury; lower numbers mean higher risk."
  },
  {
    "id": 70, "topic": "Mobility",
    "question": "A pressure injury has full-thickness skin loss with visible fat but no exposed bone, tendon, or muscle. Which stage?",
    "options": ["Stage 2", "Stage 3", "Stage 4", "Deep tissue pressure injury"],
    "answer": 1,
    "rationale": "Stage 3 is full-thickness skin loss with possible visible fat and slough; bone, tendon, and muscle are NOT exposed."
  },
  {
    "id": 71, "topic": "Mobility",
    "question": "A wound bed is completely covered by eschar so depth cannot be determined. How is it classified?",
    "options": ["Stage 2", "Stage 3", "Stage 4", "Unstageable"],
    "answer": 3,
    "rationale": "An unstageable pressure injury has a base obscured by slough and/or eschar; true depth cannot be determined until it is removed."
  },
  {
    "id": 72, "topic": "Mobility",
    "question": "In osteoporosis, which best describes the underlying pathophysiology?",
    "options": ["Bone deposition exceeds resorption", "Bone resorption by osteoclasts exceeds bone deposition by osteoblasts", "Cartilage overgrowth", "Excess joint inflammation"],
    "answer": 1,
    "rationale": "In osteoporosis, bone resorption (osteoclasts) exceeds bone deposition (osteoblasts), lowering bone mass. It is the 'silent thief' and is not a normal part of aging."
  },
  {
    "id": 73, "topic": "Mobility",
    "question": "Which are early clinical manifestations of osteoporosis?",
    "options": ["Fever and joint warmth", "Back pain from collapsed vertebrae and spontaneous fractures", "Symmetric joint swelling", "Morning stiffness lasting hours"],
    "answer": 1,
    "rationale": "Early manifestations include back pain (collapsed vertebrae) and spontaneous fractures of the spine, hips, and wrists, with gradual height loss and kyphosis."
  },
  {
    "id": 74, "topic": "Mobility",
    "question": "A postmenopausal woman loses 2-3 inches of height and develops an exaggerated thoracic curvature. What is this called?",
    "options": ["Lordosis", "Scoliosis", "Kyphosis", "Ordinary spinal curvature"],
    "answer": 2,
    "rationale": "Kyphosis (an exaggerated thoracic curve) develops in osteoporosis from vertebral collapse, along with a gradual 2-3 inch loss of height."
  },
  {
    "id": 75, "topic": "Mobility",
    "question": "Which test is the gold standard for measuring bone mineral density?",
    "options": ["X-ray", "CT scan", "DEXA scan", "Bone scan"],
    "answer": 2,
    "rationale": "The DEXA (dual-energy x-ray absorptiometry) scan is the gold standard for bone mineral density and is recommended for those over 65."
  },
  {
    "id": 76, "topic": "Mobility",
    "question": "A DEXA scan shows a T-score of -2.7. How is this interpreted?",
    "options": ["Normal bone density", "Osteopenia", "Osteoporosis", "No conclusion possible"],
    "answer": 2,
    "rationale": "A T-score of -2.5 or lower indicates osteoporosis. +1 to -1 is normal; -1 to -2.5 is osteopenia."
  },
  {
    "id": 77, "topic": "Mobility",
    "question": "Which patient has the most osteoporosis risk factors?",
    "options": ["A 30-year-old who jogs 3 miles three times a week", "A 70-year-old who has smoked for 50 years and is thin", "A 25-year-old with adequate calcium intake", "A 40-year-old who exercises regularly"],
    "answer": 1,
    "rationale": "Advanced age, long-term smoking, female sex, and low body weight are all risk factors. Weight-bearing exercise and adequate calcium are protective."
  },
  {
    "id": 78, "topic": "Mobility",
    "question": "A patient is prescribed alendronate (Fosamax). Which instruction is correct?",
    "options": ["Take with breakfast and lie down afterward", "Take with a full glass of water on an empty stomach and remain upright at least 30 minutes", "Take with a calcium supplement at the same time", "Crush and mix it in orange juice"],
    "answer": 1,
    "rationale": "Bisphosphonates are taken with a full glass of water on an empty stomach, 30 minutes before food or other meds; remain upright at least 30 minutes and avoid calcium products for an hour."
  },
  {
    "id": 79, "topic": "Mobility",
    "question": "A patient taking alendronate should report which symptom immediately?",
    "options": ["Mild thirst", "Severe abdominal pain, difficulty swallowing, or jaw pain", "Slightly dry mouth", "Occasional yawning"],
    "answer": 1,
    "rationale": "Bisphosphonates can cause GI disturbance and jaw osteonecrosis. Report severe abdominal pain, difficulty swallowing, vomiting, or jaw pain immediately."
  },
  {
    "id": 80, "topic": "Mobility",
    "question": "Calcium supplements are contraindicated in patients with which condition?",
    "options": ["Hypocalcemia", "Renal calculi and hypercalcemia", "Osteoporosis", "Vitamin D deficiency"],
    "answer": 1,
    "rationale": "Calcium supplements are contraindicated with renal calculi and hypercalcemia; monitor calcium levels, watch for flank pain, and take under 500 mg per dose."
  },
  {
    "id": 81, "topic": "Mobility",
    "question": "Which foods should a nurse recommend as good sources of calcium?",
    "options": ["Banana and grape juice", "Yogurt, kale salad, and canned sardines", "Chicken salad and baked potato", "White bread and margarine"],
    "answer": 1,
    "rationale": "Calcium-rich foods include dairy (yogurt, milk), green leafy vegetables (kale), fortified foods, and canned fish with bones (sardines)."
  },
  {
    "id": 82, "topic": "Mobility",
    "question": "Which statement by a patient shows understanding of osteoporosis self-care?",
    "options": ["I should remove throw rugs to make my home safer", "I won't use the cane because I don't want to look old", "I can keep downhill skiing if I'm careful", "I'll take up running since walking isn't enough"],
    "answer": 0,
    "rationale": "Fall prevention (removing throw rugs, adequate lighting, decluttering) is key. Refusing assistive devices and high-fall-risk activities are unsafe."
  },
  {
    "id": 83, "topic": "Mobility",
    "question": "Osteoarthritis is best described as which type of disorder?",
    "options": ["An autoimmune inflammatory disease", "A slowly progressive noninflammatory disorder of the synovial joints", "An infection of the joint", "A metabolic bone disease"],
    "answer": 1,
    "rationale": "Osteoarthritis (DJD) is a slowly progressive noninflammatory disorder of the synovial joints, with cartilage deterioration and osteophyte formation. It is the most common arthritis."
  },
  {
    "id": 84, "topic": "Mobility",
    "question": "Which bony enlargement occurs at the distal interphalangeal (DIP) joints in osteoarthritis?",
    "options": ["Bouchard's nodes", "Heberden's nodes", "Tophi", "Osteophytes of the spine"],
    "answer": 1,
    "rationale": "Heberden's nodes are bony enlargements at the DIP (fingertip) joints. Bouchard's nodes occur at the PIP (middle knuckle) joints."
  },
  {
    "id": 85, "topic": "Mobility",
    "question": "Which is a correct teaching point for a patient with osteoarthritis?",
    "options": ["Apply heat and cold for at least 2 hours at a time", "Apply heat for stiffness and cold for inflammation, limited to about 20 minutes", "Maintain a fully sedentary lifestyle", "Play high-impact sports daily"],
    "answer": 1,
    "rationale": "In OA, heat relieves stiffness and cold reduces inflammation, applied about 20 minutes only. Balance rest with activity and protect the joints."
  },
  {
    "id": 86, "topic": "Mobility",
    "question": "A patient with knee osteoarthritis asks how to minimize joint stress. Which statement shows understanding?",
    "options": ["It's fine to play soccer if I avoid injury", "A sedentary lifestyle will prevent joint strain", "I will start using a cane to protect my joints while walking", "I should run daily to strengthen the joint"],
    "answer": 2,
    "rationale": "Using a cane and assistive devices protects joints and reduces stress. High-impact sports and prolonged inactivity are not recommended for OA."
  },
  {
    "id": 87, "topic": "Mobility",
    "question": "A patient with a hip fracture is likely to show which classic manifestation?",
    "options": ["Internal rotation and lengthening of the leg", "External rotation, shortening, and adduction of the affected leg", "Bilateral leg swelling", "Increased weight-bearing ability"],
    "answer": 1,
    "rationale": "Hip fracture classically presents with external rotation, shortening, and adduction of the affected leg, muscle spasm, severe pain, and inability to bear weight."
  },
  {
    "id": 88, "topic": "Mobility",
    "question": "A patient is found on the floor after a fall. Which finding suggests a fractured hip?",
    "options": ["The injured leg is lengthened and internally rotated", "The injured leg is shortened and externally rotated", "Pain is relieved by moving the leg", "The patient repeatedly flexes the leg at the knee"],
    "answer": 1,
    "rationale": "A hip fracture presents with the affected leg shortened and externally rotated, with severe pain and inability to bear weight."
  },
  {
    "id": 89, "topic": "Mobility",
    "question": "Which surgical repair for a hip fracture uses screws, plates, or rods?",
    "options": ["Closed reduction with percutaneous pinning (CRPP)", "Open reduction with internal fixation (ORIF)", "Partial hip replacement (PHR)", "Total hip replacement (THR)"],
    "answer": 1,
    "rationale": "ORIF repairs the fracture with screws, plates, or rods. CRPP uses pins (least invasive); PHR replaces the femoral head; THR replaces head and acetabulum."
  },
  {
    "id": 90, "topic": "Mobility",
    "question": "A patient with long-bone fractures develops altered mental status, dyspnea, and petechiae. Which complication is most likely?",
    "options": ["Compartment syndrome", "Fat embolism syndrome", "Deep vein thrombosis", "Osteoarthritis"],
    "answer": 1,
    "rationale": "Fat embolism syndrome from long-bone fractures presents with altered mental status, respiratory distress, and petechiae as fat globules lodge in pulmonary vessels."
  },
  {
    "id": 91, "topic": "Mobility",
    "question": "Compartment syndrome must be treated within what time frame to prevent permanent damage?",
    "options": ["1-2 hours", "4-6 hours", "12-24 hours", "48 hours"],
    "answer": 1,
    "rationale": "Compartment syndrome causes tissue ischemia and permanent damage if not treated within 4-6 hours; treatment is emergency fasciotomy."
  },
  {
    "id": 92, "topic": "Mobility",
    "question": "Which findings are manifestations of compartment syndrome after a tibia/fibula fracture?",
    "options": ["Minimal pain and warm pink toes", "Intense pain on passive movement, a hard swollen muscle, and poor pain relief despite opioids", "Brisk capillary refill and strong pulses", "Increased range of motion"],
    "answer": 1,
    "rationale": "Compartment syndrome shows the 6 P's: intense pain (especially on passive stretch) unrelieved by opioids, a hard swollen compartment, paresthesia, pallor, paralysis, and pulselessness."
  },
  {
    "id": 93, "topic": "Mobility",
    "question": "A patient is non-weight-bearing (NWB) on one leg. Which gait/device is appropriate?",
    "options": ["Cane on the affected side", "3-point gait using crutches or a knee scooter", "Two-point gait bearing full weight", "No assistive device"],
    "answer": 1,
    "rationale": "Non-weight-bearing patients use a 3-point gait with a wheelchair, knee scooter, or crutches."
  },
  {
    "id": 94, "topic": "Mobility",
    "question": "When teaching crutch walking, where should the patient bear weight?",
    "options": ["On the axillary pads under the arms", "On the hand grips, not the axillae", "On the affected foot", "On the shoulders"],
    "answer": 1,
    "rationale": "Weight must be on the hand grips/arm pads, not the axillary pads, to avoid nerve damage. Use tripod positioning with hands at hip height."
  },
  {
    "id": 95, "topic": "Mobility",
    "question": "A patient asks how to safely go UP stairs with a cane. What is the correct sequence?",
    "options": ["Bad leg goes up first", "Good leg goes up first, then the bad leg and cane", "Cane goes up last, alone", "Both legs together"],
    "answer": 1,
    "rationale": "Going up stairs: the good leg goes up first, followed by the bad leg and cane ('up with the good')."
  },
  {
    "id": 96, "topic": "Mobility",
    "question": "Which instruction about walker use is correct?",
    "options": ["Use the walker to pull yourself up from sitting", "Do not use the walker to stand, sit, or get out of bed", "Lean the walker against the wall while walking", "Keep elbows fully extended"],
    "answer": 1,
    "rationale": "Do NOT use a walker to stand, sit, or get out of bed. Elbows flex about 15-30 degrees. Sequence: walker, weak leg, strong leg."
  },
  {
    "id": 97, "topic": "Mobility",
    "question": "In which patients are TED hose (anti-embolism stockings) contraindicated?",
    "options": ["Patients at risk for DVT", "Patients with dermatitis or an existing DVT", "Postoperative patients", "Immobile patients"],
    "answer": 1,
    "rationale": "Never use TED hose on patients with dermatitis or an existing DVT. Ensure correct sizing."
  },
  {
    "id": 98, "topic": "Mobility",
    "question": "A nurse teaches correct incentive spirometer use. Which instruction is correct?",
    "options": ["Exhale forcefully into the tube", "Inhale slowly through the mouthpiece, about 10 times per hour while awake", "Use it only once per shift", "Hold your breath the whole time"],
    "answer": 1,
    "rationale": "Breathe IN through the mouthpiece (do not exhale into the tube), about 10 times per hour while awake; manage pain first so the patient can breathe deeply."
  },
  {
    "id": 99, "topic": "Mobility",
    "question": "Which is an antecedent (prerequisite) for normal mobility?",
    "options": ["Chronic pain", "Adequate energy, muscle strength, skeletal stability, and joint function", "Sedentary lifestyle", "Neurological impairment"],
    "answer": 1,
    "rationale": "Antecedents of mobility include adequate energy, muscle strength, underlying skeletal stability, joint function, neuromuscular coordination, and age-appropriate changes."
  },
  {
    "id": 100, "topic": "Mobility",
    "question": "A patient with immobility is at risk for constipation and paralytic ileus. Which intervention is appropriate?",
    "options": ["Restrict fluids and fiber", "Encourage fluids/fiber, stool softeners, and early ambulation; assess bowel sounds", "Keep the patient supine at all times", "Encourage bed rest"],
    "answer": 1,
    "rationale": "Decreased peristalsis with immobility leads to constipation and ileus. Prevent with hydration, fiber, stool softeners (Colace/MiraLAX), early ambulation, and bowel assessment."
  },
  {
    "id": 101, "topic": "Mobility",
    "question": "A nurse grades a patient's muscle strength as 3/5. What does this indicate?",
    "options": ["Normal strength against full resistance", "Fair; movement against gravity but not against resistance", "Trace movement only", "No muscle contraction"],
    "answer": 1,
    "rationale": "On the 0-5 scale, 3/5 is 'fair' - movement against gravity but not added resistance. 5/5 is normal, 1/5 is trace, 0/5 is no contraction."
  },
  {
    "id": 102, "topic": "Mobility",
    "question": "Which describes a contracture?",
    "options": ["Temporary muscle cramp", "Permanent shortening/stiffening of muscle with the joint nonfunctional", "Bone loss from immobility", "Fluid pooling in dependent tissue"],
    "answer": 1,
    "rationale": "A contracture is stiffening and shortening of muscle that leaves the joint nonfunctional. Contractures can begin forming after about 8 hours of immobility."
  },
  {
    "id": 103, "topic": "Mobility",
    "question": "A positioning device used to prevent external rotation of the hip is a:",
    "options": ["Trapeze bar", "Trochanter roll", "Hand splint", "Incentive spirometer"],
    "answer": 1,
    "rationale": "A trochanter roll prevents external rotation of the hip. Hand splints prevent hand contractures, an AFO brace prevents footdrop, and a trapeze bar assists bed mobility."
  },
  {
    "id": 104, "topic": "Mobility",
    "question": "A nurse suspects a DVT in an immobile patient. Which action is appropriate?",
    "options": ["Massage the affected calf to improve circulation", "Measure bilateral calf circumference, avoid massaging or ambulating, and notify the provider", "Encourage the patient to walk it off", "Apply heat and continue activity"],
    "answer": 1,
    "rationale": "With a suspected DVT, measure bilateral calf circumference (a difference over 3 cm is significant), do NOT massage or ambulate, and report to the provider; Doppler ultrasound confirms the clot."
  },
  {
    "id": 105, "topic": "Mobility",
    "question": "Which device provides continuous passive motion to a joint after arthroplasty?",
    "options": ["CPM machine", "SCD", "Incentive spirometer", "Trochanter roll"],
    "answer": 0,
    "rationale": "A Continuous Passive Motion (CPM) machine promotes joint movement post-arthroplasty. SCDs prevent DVT; an incentive spirometer expands the lungs."
  },
  {
    "id": 106, "topic": "Mobility",
    "question": "The purpose of a total joint arthroplasty includes which goals?",
    "options": ["Fusing the joint permanently", "Relieving pain, improving or maintaining ROM, and correcting deformity", "Increasing joint destruction", "Preventing all future movement"],
    "answer": 1,
    "rationale": "Arthroplasty reconstructs or replaces a diseased joint with a prosthesis to relieve pain, improve or maintain ROM, and correct deformity."
  },
  {
    "id": 107, "topic": "Mobility",
    "question": "Following a right total hip replacement, which finding requires the nurse to intervene immediately?",
    "options": ["Capillary refill 3 seconds with intact sensation and palpable pedal pulses", "A well-approximated incision with steri-strips", "Voiding concentrated urine at 50 mL/hr", "A new lump in the buttock with sudden severe hip pain"],
    "answer": 3,
    "rationale": "A lump in the buttock with severe pain suggests prosthetic dislocation, requiring immediate intervention. Neurovascular checks are the priority assessment post hip replacement."
  },
  {
    "id": 108, "topic": "Mobility",
    "question": "A patient is ordered 'weight-bearing as tolerated' after a total hip replacement. Which intervention fits this order?",
    "options": ["Keep the patient on strict bed rest", "Assist the patient to a bathroom with grab bars and an elevated toilet seat, using a walker", "Log-roll the patient onto the operated side", "Have the patient stand without any device"],
    "answer": 1,
    "rationale": "Weight-bearing as tolerated allows ambulation with an assistive device. A bathroom with grab bars and an elevated toilet seat plus a walker supports safe mobility and hip precautions."
  },
  {
    "id": 109, "topic": "Mobility",
    "question": "Which is a PRIMARY prevention strategy for altered mobility?",
    "options": ["TUG test screening", "Health promotion: physical activity, nutrition, weight management, and injury prevention before disease", "Joint replacement after disease", "PT/OT rehabilitation after injury"],
    "answer": 1,
    "rationale": "Primary prevention occurs BEFORE disease: education, physical activity, calcium/vitamin D/protein nutrition, weight management, smoking cessation, and injury prevention."
  },
  {
    "id": 110, "topic": "Mobility",
    "question": "During the Timed Up and Go (TUG) test, a patient is at risk for falling if the time is:",
    "options": ["Less than 5 seconds", "6 to 8 seconds", "12 seconds or greater", "Any time at all"],
    "answer": 2,
    "rationale": "The TUG test times standing from a chair, walking 10 feet, turning, and sitting. A time of 12 seconds or greater indicates a fall risk."
  },
  {
    "id": 111, "topic": "Mobility",
    "question": "Which screening tool assesses mobility using the steps Sit, Stretch, Stand, and Step?",
    "options": ["Braden Scale", "Bedside Mobility Assessment Test (BMAT 2.0)", "Denver II", "Glasgow Coma Scale"],
    "answer": 1,
    "rationale": "The BMAT 2.0 (Sit/Stretch/Stand/Step) assesses a patient's mobility level and recommends safe handling and mobility techniques for lifting and transfers."
  },
  {
    "id": 112, "topic": "Mobility",
    "question": "Which characteristics define disuse syndrome?",
    "options": ["Improved fitness and strength", "Cardiovascular vulnerability, obesity, musculoskeletal fragility, depression, and premature aging", "Enhanced bone density", "Increased muscle mass"],
    "answer": 1,
    "rationale": "Disuse syndrome results from physical inactivity: cardiovascular vulnerability, obesity, musculoskeletal fragility, depression, and premature aging. Prevent with early mobilization, pain control, nutrition, and support."
  },
  {
    "id": 113, "topic": "Mobility",
    "question": "Which is a recognized risk factor for impaired mobility?",
    "options": ["Young adulthood with no illness", "Neurological disorders, chronic conditions, pain, and nutritional deficiencies", "Regular exercise", "Balanced nutrition"],
    "answer": 1,
    "rationale": "Risk factors include age, acute/chronic conditions, pain, injury/trauma, congenital deformities, neurologic disorders, nutritional deficiencies, and medication side effects."
  },
  {
    "id": 114, "topic": "Mobility",
    "question": "Which finding is a normal musculoskeletal assessment result?",
    "options": ["Limited ROM with crepitation", "Full ROM without pain, muscle strength 5/5, and no swelling or deformity", "Muscle strength 2/5", "Joint swelling and tenderness"],
    "answer": 1,
    "rationale": "Normal findings include full ROM of all joints without pain, 5/5 muscle strength, no atrophy or asymmetry, no swelling/deformity/crepitation, and ordinary spinal curvature."
  },
  {
    "id": 115, "topic": "Mobility",
    "question": "A vulnerable older trauma patient lies on a hard transfer board. Skin breakdown can begin within how many hours of immobility?",
    "options": ["30 minutes", "3 hours", "12 hours", "24 hours"],
    "answer": 1,
    "rationale": "A vulnerable older trauma patient on a transfer board can show signs of skin breakdown within about 3 hours of immobility, underscoring early offloading and turning."
  },
  // ============================================================
  // THERMOREGULATION  (ids 116-150)
  // ============================================================
  {
    "id": 116, "topic": "Thermoregulation",
    "question": "How does a neonate generate heat, given they cannot shiver?",
    "options": ["Voluntary muscle contraction", "Non-shivering thermogenesis using brown fat", "Peripheral vasodilation", "Increased sweating"],
    "answer": 1,
    "rationale": "Neonates cannot shiver and rely on non-shivering thermogenesis, metabolizing brown fat present at birth."
  },
  {
    "id": 117, "topic": "Thermoregulation",
    "question": "A patient develops rapidly rising temperature, muscle rigidity, tachycardia, and increased end-tidal CO2 after general anesthesia. Which medication is the priority?",
    "options": ["Acetaminophen", "A calcium channel blocker", "Dantrolene sodium", "Epinephrine"],
    "answer": 2,
    "rationale": "These are signs of malignant hyperthermia. Stop the surgery/anesthesia, give 100% oxygen, and administer dantrolene sodium 2-3 mg/kg. Avoid calcium channel blockers."
  },
  {
    "id": 118, "topic": "Thermoregulation",
    "question": "A hiker has hot, dry skin, a temperature of 106 F, and confusion after heat exposure. Which condition is suspected?",
    "options": ["Heat exhaustion", "Heat stroke", "Heat cramps", "Hypothermia"],
    "answer": 1,
    "rationale": "Heat stroke occurs when body temperature exceeds 105.8 F and hypothalamic thermoregulation fails. Hot dry skin and confusion are hallmarks; it is a medical emergency."
  },
  {
    "id": 119, "topic": "Thermoregulation",
    "question": "A nurse applies an ice pack to a febrile patient's axilla. Which type of heat loss is used?",
    "options": ["Radiation", "Conduction", "Convection", "Evaporation"],
    "answer": 1,
    "rationale": "Conduction is the transfer of heat between objects in direct contact. Convection uses air movement (a fan)."
  },
  {
    "id": 120, "topic": "Thermoregulation",
    "question": "A rescued patient has a core temperature of 88 F, depressed mental status, no shivering, and a slow irregular pulse. Which severity of hypothermia?",
    "options": ["Mild", "Moderate", "Severe", "Normothermia"],
    "answer": 1,
    "rationale": "Moderate hypothermia is 82.4-90 F with depressed mental status, absent shivering, and a slow/irregular pulse. Rewarm with heated blankets and warm packs, monitoring skin every 15-30 minutes."
  },
  {
    "id": 121, "topic": "Thermoregulation",
    "question": "Which temperature range represents normothermia in degrees Celsius?",
    "options": ["34-35 C", "36-38 C", "39-40 C", "41-42 C"],
    "answer": 1,
    "rationale": "Normothermia is 36-38 C (96.8-100.4 F), with an average oral/tympanic temperature of 98.6 F."
  },
  {
    "id": 122, "topic": "Thermoregulation",
    "question": "Which part of the brain acts as the body's thermostat?",
    "options": ["Cerebellum", "Hypothalamus", "Medulla oblongata", "Pituitary gland"],
    "answer": 1,
    "rationale": "The hypothalamus controls body temperature like a thermostat, balancing heat loss and heat production."
  },
  {
    "id": 123, "topic": "Thermoregulation",
    "question": "Which structure controls heat LOSS through sweating and vasodilation?",
    "options": ["Posterior hypothalamus", "Anterior hypothalamus", "Brainstem", "Adrenal medulla"],
    "answer": 1,
    "rationale": "The anterior hypothalamus controls heat loss (like air conditioning) via sweating, vasodilation, and inhibition of heat production; the posterior hypothalamus controls heat production."
  },
  {
    "id": 124, "topic": "Thermoregulation",
    "question": "The body can lose up to what percentage of heat through radiation?",
    "options": ["25%", "45%", "65%", "85%"],
    "answer": 2,
    "rationale": "The body can lose up to 65% of heat through radiation. Removing clothing/blankets increases radiant heat loss."
  },
  {
    "id": 125, "topic": "Thermoregulation",
    "question": "A fan is used to cool a febrile patient. Which mechanism of heat loss does this use?",
    "options": ["Conduction", "Convection", "Radiation", "Evaporation"],
    "answer": 1,
    "rationale": "Convection transfers heat away by air movement. A fan promotes heat loss through convection."
  },
  {
    "id": 126, "topic": "Thermoregulation",
    "question": "Which intervention is appropriate for hyperthermia related to fever?",
    "options": ["Add extra blankets", "Reduce clothing, give tepid baths, increase fluids, and give antipyretics", "Restrict fluids", "Apply a Bair Hugger"],
    "answer": 1,
    "rationale": "For fever: reduce coverings, tepid baths, increase fluids, cool cloths to axilla/groin/forehead, cooling blankets and fans, and antipyretics."
  },
  {
    "id": 127, "topic": "Thermoregulation",
    "question": "A patient with profuse sweating develops extreme thirst, elevated HR, dry mucous membranes, and decreased urine output after heat exposure. Which condition?",
    "options": ["Heat stroke", "Heat exhaustion", "Malignant hyperthermia", "Frostbite"],
    "answer": 1,
    "rationale": "Heat exhaustion occurs when profuse diaphoresis causes excess water and electrolyte loss. Move to a cooler environment and rehydrate."
  },
  {
    "id": 128, "topic": "Thermoregulation",
    "question": "Which is a LATE sign of heat stroke associated with high mortality?",
    "options": ["Mild thirst", "Fixed, non-reactive pupils and coma", "Slight temperature elevation", "Increased urine output"],
    "answer": 1,
    "rationale": "Late signs of heat stroke include CNS dysfunction, coma, and fixed non-reactive pupils; patients with these signs will most likely die."
  },
  {
    "id": 129, "topic": "Thermoregulation",
    "question": "Malignant hyperthermia is triggered by which agents?",
    "options": ["Oral antibiotics", "Inhaled general anesthetics or neuromuscular blockers", "IV fluids", "Antipyretics"],
    "answer": 1,
    "rationale": "Malignant hyperthermia, a hereditary muscle disorder, is triggered by inhaled general anesthetics or neuromuscular blockers, usually intra- or early post-operatively."
  },
  {
    "id": 130, "topic": "Thermoregulation",
    "question": "Which medication should be AVOIDED when treating malignant hyperthermia?",
    "options": ["Dantrolene sodium", "Calcium channel blockers", "100% oxygen", "Cooled IV fluids"],
    "answer": 1,
    "rationale": "Calcium channel blockers must be avoided. Treatment includes dantrolene, 100% oxygen, active cooling, and correcting fluid/electrolyte imbalances."
  },
  {
    "id": 131, "topic": "Thermoregulation",
    "question": "Why are newborns at greater risk for hypothermia than adults?",
    "options": ["They shiver excessively", "Large body surface area relative to mass and limited subcutaneous fat", "Thick insulating fat", "Mature thermoregulation"],
    "answer": 1,
    "rationale": "Newborns have a large surface-area-to-mass ratio, limited subcutaneous fat, lose 4x more heat than adults, and rely on brown fat for non-shivering thermogenesis."
  },
  {
    "id": 132, "topic": "Thermoregulation",
    "question": "Which finding is characteristic of MILD hypothermia (90-95 F)?",
    "options": ["No shivering and coma", "Shivering, slurred speech, poor coordination, and confusion", "V-fib and dilated pupils", "Resembles death"],
    "answer": 1,
    "rationale": "Mild hypothermia (90-95 F) presents with fatigue, slurred speech, poor coordination, confusion, shivering, tachycardia, and tachypnea."
  },
  {
    "id": 133, "topic": "Thermoregulation",
    "question": "A nurse cares for a patient with hypothermia. Which intervention is appropriate?",
    "options": ["Leave wet clothing in place", "Remove wet clothes, apply warm blankets, and monitor skin every 15-30 minutes", "Give cold beverages", "Place near an open window"],
    "answer": 1,
    "rationale": "Hypothermia care: shelter from cold, remove wet clothes, apply warm blankets and heated packs, monitor skin every 15-30 minutes, and give warm high-carbohydrate beverages."
  },
  {
    "id": 134, "topic": "Thermoregulation",
    "question": "Which nursing intervention is correct for treating frostbite?",
    "options": ["Rub and massage the area vigorously", "Rapidly rewarm in 104-105 F circulating water for 20-30 minutes; do not rub", "Apply direct dry heat", "Delay warming as long as possible"],
    "answer": 1,
    "rationale": "In hospital, frostbite is rewarmed rapidly in 104-105 F circulating water for 20-30 minutes. Do not rub or massage; rapid thawing decreases tissue necrosis."
  },
  {
    "id": 135, "topic": "Thermoregulation",
    "question": "Which locations are most commonly affected by frostbite?",
    "options": ["Abdomen and back", "Ear lobes, tip of nose, fingers, and toes", "Thighs and buttocks", "Chest and shoulders"],
    "answer": 1,
    "rationale": "Frostbite most commonly affects the ear lobes, tip of the nose, fingers, and toes, where ice crystals form inside cells causing tissue damage."
  },
  {
    "id": 136, "topic": "Thermoregulation",
    "question": "Which device is used specifically as a WARMING device using convective air?",
    "options": ["Arctic Sun", "Bair Hugger", "Ice pack", "Cooling blanket"],
    "answer": 1,
    "rationale": "The Bair Hugger is a warming device using convective air. The Arctic Sun both heats and cools; the Stryker pad allows specific temperature control."
  },
  {
    "id": 137, "topic": "Thermoregulation",
    "question": "Which is an antecedent (prerequisite) for normal thermoregulation?",
    "options": ["Active infection", "Normal hypothalamic function and adequate fluid intake", "Absent sweat glands", "Dehydration"],
    "answer": 1,
    "rationale": "Antecedents include a normal hypothalamus, normal sweat gland and skeletal muscle function, sufficient blood flow, brown fat in the newborn, adequate fluid intake, and being free of infection."
  },
  {
    "id": 138, "topic": "Thermoregulation",
    "question": "Which patients are at highest risk for impaired thermoregulation?",
    "options": ["Healthy young adults", "Infants and older adults", "Athletes only", "Middle-aged adults only"],
    "answer": 1,
    "rationale": "Infants and older adults are most vulnerable. Older adults have less thermoregulatory control and loss of subcutaneous fat; infants have a high surface-area-to-mass ratio."
  },
  {
    "id": 139, "topic": "Thermoregulation",
    "question": "A nurse writes: 'Patient will exhibit temperature within normal range within 1 hour of receiving antipyretic.' This is an example of what?",
    "options": ["A nursing diagnosis", "A measurable, time-bound outcome goal", "An assessment", "A medical order"],
    "answer": 1,
    "rationale": "This is a measurable, time-bound expected outcome, specifying the expected result and a time frame."
  },
  {
    "id": 140, "topic": "Thermoregulation",
    "question": "Which statement about core versus surface body temperature is correct?",
    "options": ["Core temperature varies widely with the environment", "Core temperature stays relatively constant; surface temperature varies with blood flow and environment", "Surface temperature is always higher than core", "They are always identical"],
    "answer": 1,
    "rationale": "Core temperature (heart, brain, liver, kidneys) stays relatively constant, while surface temperature varies with skin blood flow and environmental heat exchange."
  },
  {
    "id": 141, "topic": "Thermoregulation",
    "question": "Which structure controls heat PRODUCTION through vasoconstriction and muscle contraction?",
    "options": ["Anterior hypothalamus", "Posterior hypothalamus", "Cerebellum", "Sweat glands"],
    "answer": 1,
    "rationale": "The posterior hypothalamus controls heat production (like a heater) through vasoconstriction and voluntary/involuntary muscle contraction."
  },
  {
    "id": 142, "topic": "Thermoregulation",
    "question": "Shivering is best described as:",
    "options": ["A voluntary decision to warm up", "An involuntary muscle response to temperature differences that generates heat", "A method of heat loss", "A sign of hyperthermia only"],
    "answer": 1,
    "rationale": "Shivering is an involuntary muscle response to temperature differences in the body that generates heat. Neonates cannot shiver and use brown fat instead."
  },
  {
    "id": 143, "topic": "Thermoregulation",
    "question": "Heat production in the body is primarily a by-product of what?",
    "options": ["Sweating", "Metabolism", "Vasodilation", "Radiation"],
    "answer": 1,
    "rationale": "Heat production is a by-product of metabolism: more metabolism produces more heat, less metabolism produces less heat."
  },
  {
    "id": 144, "topic": "Thermoregulation",
    "question": "A febrile patient's temperature is being lowered with a cooling blanket. Which mechanism of heat loss is primarily used?",
    "options": ["Radiation", "Conduction", "Evaporation", "Metabolism"],
    "answer": 1,
    "rationale": "A cooling blanket in direct contact with the skin transfers heat away by conduction (heat moves from the warmer body to the cooler surface)."
  },
  {
    "id": 145, "topic": "Thermoregulation",
    "question": "Which severity of hypothermia is described as 'resembles death' with a temperature below 82.4 F?",
    "options": ["Mild", "Moderate", "Severe", "Normothermia"],
    "answer": 2,
    "rationale": "Severe hypothermia (below 82.4 F) resembles death, with a slow pulse and respirations, decreased response to stimuli, V-fib, dilated unresponsive pupils, and coma."
  },
  {
    "id": 146, "topic": "Thermoregulation",
    "question": "Malignant hyperthermia occurs with a temperature above what value and is described how?",
    "options": ["Above 100.4 F; benign", "Above 105.8 F; a life-threatening emergency", "Below 95 F; mild", "Above 99 F; expected"],
    "answer": 1,
    "rationale": "Malignant hyperthermia is life-threatening, with rapidly rising temperature and muscle rigidity; heat stroke similarly occurs with temperatures above 105.8 F."
  },
  {
    "id": 147, "topic": "Thermoregulation",
    "question": "Which emergency intervention is appropriate for heat stroke?",
    "options": ["Cover the patient with warm blankets", "Move to a cooler environment, remove excess clothing, apply cool wet towels, and use fans", "Restrict all fluids", "Encourage vigorous exercise"],
    "answer": 1,
    "rationale": "Heat stroke interventions: move to a cooler environment, remove clothing, apply cool wet towels, use fans (convection), give cooled IV fluids and cooling blankets, and monitor for dysrhythmias."
  },
  {
    "id": 148, "topic": "Thermoregulation",
    "question": "A nurse teaches prevention of heat-related illness. Which instruction is appropriate?",
    "options": ["Exercise in poorly ventilated areas", "Drink water before, during, and after exercise, and avoid strenuous activity in hot humid weather", "Avoid all fluids during exercise", "Wear heavy dark clothing in the heat"],
    "answer": 1,
    "rationale": "Prevent heat illness by hydrating before/during/after exercise, avoiding strenuous activity in hot humid weather and poorly ventilated areas, and educating about risks in infants and the elderly."
  },
  {
    "id": 149, "topic": "Thermoregulation",
    "question": "Which patient statement indicates a need for more teaching about hypothermia prevention?",
    "options": ["I will make sure my home is adequately heated in winter", "I will dress in warm layers and stay dry", "A few alcoholic drinks will keep me warm outside in the cold", "I will watch older family members closely in cold weather"],
    "answer": 2,
    "rationale": "Alcohol increases hypothermia risk (vasodilation and impaired judgment). Prevention includes adequate heating, shelter, appropriate dry clothing, and heightened caution in infants, elderly, and those using alcohol."
  },
  {
    "id": 150, "topic": "Thermoregulation",
    "question": "A patient scheduled for surgery has a family history of malignant hyperthermia. What is the nurse's priority action?",
    "options": ["Proceed without concern", "Report the family history to the surgical team before anesthesia", "Administer dantrolene prophylactically without an order", "Cancel all future surgeries permanently"],
    "answer": 1,
    "rationale": "Malignant hyperthermia is hereditary. Reporting a family history to the anesthesia/surgical team before surgery allows precautions, since it is triggered by anesthetic agents."
  }
];
