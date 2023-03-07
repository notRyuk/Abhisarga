export const shuffle = (array: Array<any>) => {
    var m = array.length, t: any, i: any
    while(m) {
        i = Math.floor(Math.random()*m--)
        t = array[m]
        array[m] = array[i]
        array[i] = t
    }
    return array
}


export const events = [
    {
        name: "Kalayikam",
        club: "Meraki",
        description: "Art is not a thing it is a way that makes things more realistic than any other. In the mind of every artist there is a masterpiece. let's bring the imaginary masterpiece out by painting and sketching and let the people see the magic of your talent and beauty of your imagination.",
        rounds: [
            {
                roundNumber: 0,
                type: "ONLINE",
                registration: {
                    start: "March 7th, 9:00AM",
                    end: "March 21st, 9:00AM",
                },
                event: {
                    start : "March 21st, 6:00PM",
                    end: "March 22nd, 6:00PM"
                }
                
            }
            ,
            {
                roundNumber: 1,
                type: "ONLINE",
                registration: {
                    start: "March 21, 9:00 AM",
                    end: "March 22, 6:00 PM	",
                },
                event: {
                    start : "March 21, 9:00 AM	",
                    end: "March 22, 6:00 PM	"
                }
                
            }

        ],
        type: "CULTURAL"
    },
    {
        name: "MatrixModelMania",
        club: "Matrix",
        description: `Welcome to Analytics Arena, Matrix's Data analytics cum Machine learning hackathon is finally here!

        Unleashing the power of analytics and machine learning: Solve Real-World problems with data-driven solutions! Experience an adrenaline fuelled test of skill in this 48-hour long hackathon where you will be provided a problem statement from top industry experts.
        
        Our hackathon will be an intensive, fun, and challenging event where you will have the opportunity to work with others to create innovative and impactful solutions.
        
        So, what are you waiting for? Register now to join us for Abhisarga'23's one and only data science hackathon!`,
        rounds: [
            {
                roundNumber: 1,
                type: "ONLINE",
                registration: {
                    start: "March 10, 9:00 AM	",
                    end: "March 20, 6:00 PM	",
                },
                event: {
                    start : "March 21, 6:00 AM	",
                    end: "March 22, 9:30 PM	"
                },
                roundDesc: "It is an online quiz based on Analytics, Machine learning and Deep learning conducted on Unstop platform which acts as a first level qualifier for the Hackathon Participation.Top 50 teams will be qualified to the next round. If the number of registrations are less than 50 in this round then the teams which have participated in the quiz will be directly selected for the next round."													
                
            },
            {
                roundNumber: 2,
                type: "ONLINE",
                registration: {
                    start: "March 24, 6:00 AM ",
                    end: "March 22, 10:30 PM ",
                },
                event: {
                    start : "March 21, 9:00 AM	",
                    end: "March 22, 6:00 PM	"
                }
                
            }
        ],
        rules: [
            "It will be conducted in the full screen mode of your browser. Switching tabs may leads to disqualification from the event.", 
            "Each question carriers 1 mark.",
            "For each question, there will be a penalty of 0.25 for incorrect answers",
            "All decisions in the matter of eligibility, authenticity & final judgement will be with Unstop and the organizer."
        ],
        type: "TECHNICAL"
    },
    {
        name: "Mini Masterpiece",
        club: "Mise-En-Scene ",
        description: `A short film competition
        All that you need to know about Mini Masterpiece : A Short Film Competition
        Short Film making is an art form that requires creativity, imagination and 
        storytelling skills. A short film is any motion picture that is short enough in running 
        time not to be considered a feature film and this competition is aimed at 
        promoting the talents and skills of students in the fields of writing, editing, 
        cinematography, and direction.`,
        rounds: [
            {
                roundNumber: 1,
                type: "ONLINE",
                registration: {
                    start: "March 7, 9:00 PM",
                    end: "March 30, 12:00 PM",
                },
                event: {
                    start : "note needed ",
                    end: "note needed"
                },
                roundDesc: [
                    "There is no entry fee to participate in the competition",
                    " Film can be in any language but, the appropriate subtitles in English should be provided.",
                    " A maximum of 10 groups per college is allowed.",
                    "The top 5-10 entries will be screened offline for the audience.",
                    "A google form will be circulated in which you have to submit your short film.",
                    "Upload your short film in YouTube so that would be easy to access ."
                ],		
                roundRules: [
                    "Short film should be with a length between 5 to 10 minutes.",
                    "The film should only be in 16:9 aspect ratio.",
                    " All languages accepted and subtitles are must and should be present in English",
                    "There is no limit on the number of characters.",
                    "The script of the play must be original. Movies or plays can inspire characters, but the whole story cannot be inspired by movies/ plays.",
                    "Vulgarity is strictly prohibited and can lead to disqualification.",
                    " Obscenity of any kind that is harmful to the interests or beliefs of specific but not limited to social, economic, religious, gender or political groups will lead to the disqualification of the team.",
                    "The decision of the judging panel will be final and binding.",
                    " Mention your college name, team name, and contact number along with submissions.",
                    "Next proceedings : Top 5 or 10 groups based on participants will be selected for second round which will be an offline round."

                ]									
                
            },
            {
                roundNumber: 2,
                type: "ONLINE",
                registration: {
                    start: "Note needed",
                    end: "Note needed",
                },
                event: {
                    start : "March 21, 9:00 AM	",
                    end: "March 22, 6:00 PM	"
                },
                roundDesc: [
                    "2-3 hours of time will be given, participants have to submit the work within the time this will be a team participation round.",
                    " The video time should within 5 mins.",
                    "Time constraint : Group should submit the work with in the time .",
                    " Creativity : The creativity shown in usage of props and script writing . ",
                    " Participation : As it is an group activity everyone in the group should be actively participating .",
                    " There should be no damage done to props given to you.",
                    "Final winner will and decided by the judging committee."
                ]
                
            }

        ],
        type: "CULTURAL"
    },
    {
        name: "GizmoCon",
        club: "ConnexIon",
        description: `Welcome to our exciting hackathon event!

        Get ready to unleash your creativity and problem-solving skills in a collaborative environment with like-minded individuals. Our hackathon will be an intensive, fun, and challenging event where you will have the opportunity to work with others to create innovative and impactful solutions.
        
        Over the course of 48 hrs, you will work on developing and presenting your ideas to a panel of expert judges. 
        
        This hackathon is open to all skill levels and backgrounds, so whether you are a seasoned programmer or a newcomer to the tech world, there is a place for you on our teams. Come with an open mind, a willingness to learn, and a passion for creating positive change.
        
        So, what are you waiting for? Register now and join us for an unforgettable hackathon experience that could change the course of your career!
        `,
        rounds: [
            {
                roundNumber: 1,
                type: "ONLINE",
                registration: {
                    start: "March 8, 9:00 AM",
                    end: "March 22, 6:00 PM	",
                },
                event: {
                    start : "March 24, 4:30 PM	",
                    end: "March 24, 6:30 PM	"
                },
                roundDesc: [
                    "Hosting a virtual event which can effectively filter the potential candidates who has the ability to create a solution for a pre existing problems by applying his theoretical knowledge into practical applications. All the registered teams would be participating this stage, where we are purifying the top 18 according to our institution norms.Then these teams are further invited to the campus for subsequent stages."
                ]
                ,		
                roundRules: [
                    "Stage 1 questions would be based on Embedded systems and relavant topics .",
                    "Number of questions for stage 1 would be 30.",
                    " Would be conducted in Quizizz.",
                    "Top 18 teams would be selected for stage 2 (offline).",
                ]									
                
            },
            {
                roundNumber: 2,
                type: "ONLINE",
                registration: {
                    start: "March 25, 5:00 PM",
                    end: "March 30, 6:00 PM	",
                },
                event: {
                    start : "April 7, 11:00 AM	",
                    end: "April 7, 5:00 PM "
                },
                roundDesc: [
                    "The participants must come prepared with the most confident hardware prototype and build it in the evaluation room. The prototypes must be build with concepts of IoT which contain arduinos, sensors, raspberry pi, nodeMcu, MPMC. Further details and instructions for this stage would be communicated with the selected teams."
                ]
                ,
                roundRules: [
                    "People must bring their own hardware components for stage 2 along with a decided prototypes.",
                    "Designed prototypes must be build in the evaluation hall.",
                    "Candidates must bring their own laptops with charging cables and necessary accessories for the laptop.",
                    "Candidates must have their arduino cables and other mandatory accesories for hardware development.",
                    "Duration for stage 2 is tentatively 5 hours.",
                    "8 teams would be selected after the filtering process in stage 2."
                ]
                
            },
            {
                roundNumber: 3,
                type: "ONLINE",
                registration: {
                    start: "not needed",
                    end: "not needed",
                },
                event: {
                    start : "April 7, 5:30PM",
                    end: "April 9, 9:00 AM"
                },
                roundDesc: [
                    "The ultimate hackathon is here. The teams would be given a problem statement and the components required for it's solutions. The competing teams must build an efficient hardware prototype with an user interface."
                ]
                ,
                roundRules: [
                    "On spot problem statement for stage 3.",
                    "Required components for the problem statement would be provided. ",
                    "User interface is must for the final round.",
                    "Teams can discuss with their mentor.",
                    "Duration for stage 3 is tentatively 36 hours."
                ]
                
            }

        ],
        rules: [
            "Quartet team is must with three hardware experts and a software expert.",
            "Inter-college team members not allowed.",
            "Inter-specialization team members allowed.",
            "In stage 3, students must only utilise the components given by the organising committe, to build the prototype.",
            "If any team is found guilty of UFM, they would be ruled out of the contest.",
            "The UFM might be in any form including malpracticing, damaging other prototypes etc."
        ],
        type: "TECHNICAL"
    },
    {
        name: "HackFrenzy",
        club: "IOTAxGDSC",
        description: `Welcome to our exciting hackathon event!

        Get ready to unleash your creativity and problem-solving skills in a collaborative environment with like-minded individuals. Our hackathon will be an intensive, fun, and challenging event where you will have the opportunity to work with others to create innovative and impactful solutions.
        
        Over the course of 36 hrs, you will work on developing and presenting your ideas to a panel of expert judges. 
        
        This hackathon is open to all skill levels and backgrounds, so whether you are a seasoned programmer or a newcomer to the tech world, there is a place for you on our teams. Come with an open mind, a willingness to learn, and a passion for creating positive change.
        
        So, what are you waiting for? Register now and join us for an unforgettable hackathon experience that could change the course of your career!
        `,
        rounds: [
            {
                roundNumber: 0,
                type: "ONLINE",
                registration: {
                    start: "March 8, 11:58 PM",
                    end: "March 22, 5:00 PM	",
                },
                event: {
                    start : "March 22, 6:00 PM",
                    end: "March 23, 11:59 PM"
                }

            }
            ,
            {
                roundNumber: 1,
                type: "ONLINE",
                registration: {
                    start: "note needed",
                    end: "note needed",
                },
                event: {
                    start : "March 24, 5:00 PM",
                    end: "March 30, 5:00 PM	"
                }
    
            },
            {
                roundNumber: 2,
                type: "ONLINE",
                registration: {
                    start: "note needed",
                    end: "note needed",
                },
                event: {
                    start : "April 7, 10:00 AM	",
                    end: "April 8, 10:00 PM	"
                },
                
            }

        ],
        type: "TECHNICAL" 
    },
    {
        name: "Drive to Drama",
        club: "Mise-En-Scene ",
        description: `A Theatre competition (skit) where participants compete with other teams on basis of 
        essence of their act. participants are allowed to do any kind of drama or act on stage 
        (suggested to bring their own props).`,
        rounds: [
            {
                roundNumber: 1,
                type: "OFFLINE",
                registration: {
                    start: "March 7, 9:00 PM ",
                    end: "March 30, 12:00 PM ",
                },
                event: {
                    start : "April 8 6:30 PM",
                    end: "April 8, 9:30 PM	"
                },
                roundRules: [
                    "Vulgarity is strictly prohibited and can lead to disqualification.",
                    " Obscenity of any kind that is harmful to the interests or beliefs of specific but not limited to social, economic, religious, gender or political groups will lead to the disqualification of the team.",
                    " The decision of the judging panel will be final and binding.",
                    "Duration: The act should not exceed from 7-15 minutes .",
                    "Theme flexibility: The theme of the act can be anything (but not offensive in terms of discrimination, foul language is forbidden) .",
                    "On Stage : The judgement will be according to fallowing criteria's .",
                    "Acting skills",
                    "Script writing",
                    "Dialogue delivery",
                    "Behavior on stage"

                ]									
                
            }
            
        ],
        type: "CULTURAL"
    },
    {
        name: "ATMUN",
        club: "Literary Club",
        description: `Welcome to the Abhisarga Techno-cultural fest Model United Nations (ATMUN)!

        This will be a two day event to be held on April 7th and 8th. Our MUN will only have the United Nations Human Right Council. 
        
        ATMUN will provide students a platform where they can sharpen their  leadership and diplomatic skills, decision making, engage in constructive debates, enhance their understanding of Geo-politics and international relations. 
        
        Join us for this exciting and challenging experience!`,
        rounds: [
            {
                roundNumber: 1,
                type: "ONLINE",
                registration: {
                    start: "March 6th, 9:00 AM	",
                    end: "March 31, 12:00 AM	",
                },
                event: {
                    start : "6th April, 5:00 PM	",
                    end: "April 7th, 6:00 PM"
                },
                roundDesc:[
                    "Committee: Human Rights Council",
                    "Agenda: Will be shared via email a week before the Event ",
                    "Awards: Awards will be given to the 3 best delegates. The decision of the chairs will be final although the voting from the delegates will be considered. (The delegates will also be asked to vote for who they think were the best delegates)"
                ],
                roundRules: [
                    "Registration: Each institute can register a maximum of 4 participants. Registration can be done through the literary or oratory club of the institute.",
                    "The committee will have a maximum participation of 47 delegates. The Delegates will be selected in the ascending order of the ranked list provided by each institute. (1st rank -> 4th rank).",
                    "Note: not all the 4 registered participants may be selected",
                    "Dress Code: All participants must dress in formal business attire during the event."
                    ]									
                
            }
            

        ],
        type: "CULTURAL"	
    },
    {
        name: "The Ultimate Dance Battle",
        club: "Beatripperz",
        description: `Welcome to The Ultimate Dance Battle

        Dancing with the feet is one thing, but dancing with the heart is another.Get ready to set the stage on fire with your moves.
        
        Let dance speak your emotions,thoughts and style together.`,
        rounds: [
            {
                roundNumber: 1,
                type: "OFFLINE",
                registration: {
                    start: "March 10, 9:00 AM",
                    end: "March 25, 6:00 PM	",
                },
                event: {
                    start : "April 8, 5:30 PM",
                    end: "April 8th, 10:00 PM"
                },
                roundDesc: [
                    "Pick Your Poison ","This is a non-theme group-dance competition where guest institutes would participate",
                    "Date : 8th april ",
                    "Time : 5:30 pm",
                    "Team size: 7-15",
                    "Duration should not exceed 7 min.",
                    "Judgment will be based on dance moves, expressions, selection of the music piece, props and costumes"
                ],
                roundRules: [
                    "Top teams will go to the next round  and the remaining teams will me eliminated ",
                    "Judges will decide how many people to eliminate from round 1 based on the registrations received "
                    

                ]									
                
            },
            {
                roundNumber: 2,
                type: "OFFLINE",
                registration: {
                    start: "March 10, 9:00 AM	",
                    end: "March 25, 6:00 PM	",
                },
                event: {
                    start : "April 8, 5:30 AM",
                    end: "April 8, 10:00 PM	"
                },
                roundDesc: [
                    " Battle of the Beats","This is a theme group-dance competition where the  selected teams will participate.",
                    "Themes provided:",
                    "Classical",
                    "Retro",
                    "Mass",
                    "Participants have to choose only one theme from the above mentioned themes.",
                    "Duration: 4 min - 7 min",
                    "The top 5 groups with highest marks will be allowed to advance to the next round"
                ],
                roundRules: [
                    "Rules and Event Guidelines:Participants have to choose only one theme for this round "
                ]									
                
            },
            {
                roundNumber: 3,
                type: "OFFLINE",
                registration: {
                    start: "March 10, 9:00 AM",
                    end: "March 25, 6:00 PM	",
                },
                event: {
                    start : "April 8, 5:30 PM",
                    end: "April 8th, 10:00 PM"
                },
                roundDesc: [
                    "Step-Up Showdown","This is a theme group-dance competition where the  selected teams will participate",
                    "Themes provided:",
                    "Locking",
                    "Breaking",
                    "Whacking",
                    "Mentioned all three themes should be there in the performance.",
                    "Duration: 4 min - 7 min.",
                    "The group with highest marks will be declared as winners and the group with the next highest score will be declared as 1st runner up and the 2nd runner up.",
                    "Marks will be awarded based on the choreography, justification to the theme,costumes, coordination & involvement of the group."
                ],
                roundRules: [
                    "Max of 3 teams from a single college can participate.",
                    "The event comprises 3 rounds.",
                    " Best will be taken on cumulative scores by the judge.",
                    "Group name and institute name should be mentioned while registering.",
                    "Three rounds are to be held in IIIT Sri City Campus on 8th of April 2023.",
                    "In case of any unforeseen circumstances, the committee has the sole authority to make decisions."
                ]									
                
            }
        ],
        type: "CULTURAL"
    },
    {
        name: "Elektra",
        club: "Gradient",
        description: "",
        rounds: [
            {
                type: "ONLINE",
                roundDesc: [
                    "This will be a coding contest on Unstop! You will see the “Code” button here, once the round is live."
                ],
                event: {
                    start: "31 Mar 23, 08:00PM",
                    end: "31 Mar 23, 10:00PM",
                },
                registration: {
                    start: "Started",
                    end: "30 Mar 23, 12:00AM"
                }
            },
            {
                type: "OFFLINE",
                roundDesc: ["This round will be conducted offline at the campus of IIIT Sri City as part our techno-cultural fest Abhisarga"],
                event: {
                    start: "09 Apr 23, 10:00",
                    end: "09 Apr 23, 01:00"
                }
            }
        ],
        rules: [
            "This event is open to all college students.",
            "Inter-college team members are not allowed.",
            "The team may consist of 1 to 3 members of the same institute.",
            "There will be 2 stages. Top 25 teams from stage 1 will be invited to the onsite stage 2 to be conducted at the campus of IIIT Sri City.",
            "Stage 1 will consist of 5 questions to be solved within 2 hours.",
            "The final round will consist of 5-6 questions as well to be solved within 3 hours.",
            "Plagiarism in any form will lead to immediate disqualification.",
            "The judging criteria will be the total score, with ties broken by penalty time.",
            "Do not share your codes during the contest.",
            "In case of any conflicts, the decision of the organizers will be final.",
        ]
    }
]