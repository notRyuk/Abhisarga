import beatRipperzBanner from "./assets/banners/Beatripperz - The Ultimate Dance Battle.png"
import connexionBanner from "./assets/banners/Connexion - GizmoCon.png"
import fStopsBanner from "./assets/banners/fstops - Camera ON.png"
import gradientBanner from "./assets/banners/Gradient - Elektra.png"
import iotaXgdscBanner from "./assets/banners/IOTAxGDSC - HackFrenzy.png"
import kalayikamBanner from "./assets/banners/Kalayikam - Meraki.png"
import litercyClubBanner from "./assets/banners/Literary Club - ATMUN.png"
import matrixBanner from "./assets/banners/Matrix - Analytics Arena.png"
import miseEnSceneBanner1 from "./assets/banners/Mise-En-Scene - Drive to Drama.png"
import miseEnSceneBanner2 from "./assets/banners/Mise-En-Scene - Mini Masterpiece.png"
import mlBattlesBanner from "./assets/banners/ML Battles.png"

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

export function encrypt(text: string) {
    var year: any = new Date().getFullYear()
    var key = Math.floor((text.charCodeAt(0)*text.charCodeAt(1)+16)/year)
    var text = shuffle(text.split("").map((e: any, i: any) => (e.charCodeAt(0)+key).toString().padStart(3, "0")+(i+key).toString().padStart(2, "0"))).join("")
    year = year.toString().split("").map((e:any, i:any) => (i===0)?e.charCodeAt(0)-key:e.charCodeAt(0)+key).join("")
    text += ":"+year+key.toString()+"-"+key.toString().length
    return text
}

export function decrypt(token: string) {
    var tokens = token.split("-")
    var keyLength = Number(tokens[tokens.length-1])
    var mainTokens = tokens[0].split(":")
    var temp = mainTokens[1].split("").reverse()
    var key = 0
    var i = 0
    while(i<keyLength) {
        key += Number(temp.splice(0, 1))*(10**i)
        i++
    }
    key = Number(key)
    var keys: string[][] = []
    var temp1 = mainTokens[0].split("")
    for(var i=0; i<mainTokens[0].length/5; i++) {
        temp = []
        for(var k=0; k<5; k++) {
            temp.push(temp1.splice(0, 1)[0])
        }
        keys.push(temp)
    }
    var values = Array(keys.length).fill("")
    keys.forEach(k => {
        var ascii = 0
        var index = 0
        i = 3
        while(i--) {
            ascii += (+(k.splice(0, 1)[0]))*(10**i)
        }
        i = 2
        while(i--) {
            index += (+(k.splice(0, 1)[0]))*(10**i)
        }
        values[index-key] = String.fromCharCode(ascii-key)
    })
    return values.join("")
}

export const base = "https://abhisarga.org/api/"

export const events = [
    {
        name: "Kalayikam",
        club: "Meraki",
        description: "Art is not a thing it is a way that makes things more realistic than any other. In the mind of every artist there is a masterpiece. let's bring the imaginary masterpiece out by painting and sketching and let the people see the magic of your talent and beauty of your imagination.",
        registration: {
            start: "March 7th, 9:00AM",
            end: "March 25st, 12:00AM",
        },
        qoute: "Talk is cheap. Show me what you can do.",
        rounds: [
            {
                roundNumber: 0,
                name: "Online screening",
                type: "ONLINE",
                event: {
                    start : "March 26, 6:00PM",
                    end: "March 26, 11:59PM"
                },
                roundDesc: ["Participants will be filtered to certain number of group through this. Here participants are supposed to choose a theme and make painting and sketching based on it"],
                roundRules: [
                    "Based on the participants registered there will be an online screening for qualifying to next stage.",
                    "Date: 26th March 23",
                    "Time duration: 1hr 30 minutes",
                    "In the first 15 minute team should submit a description of the art they are going to make and an intermediate stage snapshot will be collected to ensure art is made then itself",
                    "The mode of submission will be decided and announced before the start",
                    "Note: Scores from this are only taken for filtering and will not be added to further stages of evaluation"

                ]
                
            },
            {
                roundNumber: 1,
                name: "GroupUpArt",
                type: "OFFLINE",
                event: {
                    start : "March 21, 9:00 AM	",
                    end: "March 22, 6:00 PM	"
                },
                roundDesc: ["Offline Round participants/groups have to make an painting and sketching based on given theme and evaluation will be done on various parameters and scores will be cumulative for the qualified teams"],
                roundRules: [
                    "The team should submit a painting (on canvas) and sketch (on A3 paper) according to the theme",
                    "The theme will be released at the time of the event",
                    "Time duration: 3hrs 20 minutes",
                    "3 hours for making of art and 20min for getting a reference for the given  theme after releasing the theme you can start at any point of time",
                    "Event venue: Indian Institue Of Information Technology Sri City",
                    "Acrylic paint of 12 shades, palette, canvas and pencil set, gsm paper will be provided",
                    "The best teams will be qualified to next stage"
                ]
                
            },
            {
                roundNumber: 2,
                name: "Wall Painting",
                type: "OFFLINE",
                event: {
                    start : "March 21, 9:00 AM	",
                    end: "March 22, 6:00 PM	"
                },
                roundDesc: ["Offline Round. Here qualified teams should do wall painting of the painting that has been done in 'GroupUpArt' .This will be the final round"],
                roundRules:  [
                    "Qualified teams should do wall painting",
                    "The dimensions of the wall area provided are x feet (width) x y feet (height). The surface on which the painting is to be made is a stone wall which has white primer put up.",
                    "Teams must make exactly the same Wall Painting as the submitted art piece from stage1",
                    "Time duration:3hrs 15min",
                    "set of 5 primary shades(white, yellow, ultramarine, black, red) will be provided",
                ]
                
            }

        ],
        rules: [
            "No extra time but if any team completes before the allotted time there will be no penalty or reward.",
            "No reference once you start",
            "Deviation from the theme will result in the deduction of points.",
            "No extra items will be allowed or provided, if required it must be taken permission from the event organizer before event starts",
        ],
        type: "CULTURAL",
        pool: 60000,
        banner: kalayikamBanner,
        link: "https://unstop.com/p/kalayikam-abhisarga-2023-indian-institute-of-information-technology-iiit-sri-city-633542"
    },
    {
        name: "Analytics Arena",
        club: "Matrix",
        description: `Welcome to Analytics Arena, Matrix's Data analytics cum Machine learning hackathon is finally here!

        Unleashing the power of analytics and machine learning: Solve Real-World problems with data-driven solutions! Experience an adrenaline fuelled test of skill in this 48-hour long hackathon where you will be provided a problem statement from top industry experts.
        
        Our hackathon will be an intensive, fun, and challenging event where you will have the opportunity to work with others to create innovative and impactful solutions.
        
        So, what are you waiting for? Register now to join us for Abhisarga'23's one and only data science hackathon!`,
        registration: {
            start: "March 10, 9:00 AM",
            end: "March 21, 6:00 PM	",
        },
        qoute: "Talk is cheap. Show me the code.",
        rounds: [
            {
                roundNumber: 1,
                type: "ONLINE",
                name: "Analytics Ace Quiz : Quiz Round (on Unstop)",
                event: {
                    start : "March 22, 6:00 AM",
                    end: "March 23, 9:30 PM	"
                },
                roundDesc: ["It is an online quiz based on Analytics, Machine learning and Deep learning conducted on Unstop platform which acts as a first level qualifier for the Hackathon Participation.Top 50 teams will be qualified to the next round. If the number of registrations are less than 50 in this round then the teams which have participated in the quiz will be directly selected for the next round."],												
                roundRules: [
                    "It will be conducted in the full screen mode of your browser. Switching tabs may leads to disqualification from the event.", 
                    "Each question carriers 1 mark.",
                    "For each question, there will be a penalty of 0.25 for incorrect answers",
                    "All decisions in the matter of eligibility, authenticity & final judgement will be with Unstop and the organizer."
                ]
            },
            {
                roundNumber: 2,
                type: "ONLINE",
                name: "The Modelling Sprint : (Online Round)",
                event: {
                    start : "March 25, 6:30 AM	",
                    end: "March 27, 10:30 PM	"
                },
                roundDesc: ["A data set will be provided, and participants will be required to build models. The model is run on the test data, and the results are compared. The model that performs well will rise to the top of the leaderboard. The top 10-15 teams will advance to the next round. the second round of our event will be hosted on a different platform. Details regarding the platform and instructions on how to participate will be communicated to the participants cleared the 1st round."],
                roundRules: [
                    "Only the teams who have cleared the first round will be advanced to this round.", 
                    "Each team should only submit one model.",
                    "All decisions in the matter of eligibility, authenticity & final judgement will be with the organizers.",
                    "All other specifics will be provided during the event.",
                    "The top 10-15 outperformed teams will be selected from this round, and they will be getting a chance to attend the Hackathon at IIIT Sri City during the Abhisargha'23 and can win exciting prizes!",
                    "Prove your skills and earn your spot at the Hackathon!"
                ]
            },
            {
                roundNumber: 3,
                type: "OFFLINE",
                name: "Analytics Arena (Offline at IIIT Sri City)",
                event: {
                    start : "April 7, 11:00 AM	",
                    end: "April 9, 11:00 AM	"
                },
                roundDesc: ["It will be a 48 hrs long hackathon. Problem statement will be provided on the starting day of hackathon. Details regarding the Dataset and other constraints will be communicated along with problem statement."],
                roundRules: [
                    "The participants attending the hackathon should bring their college ID failing to provide a valid document may lead to disqualification of team.", 
                    "Participants should follow the guidelines of organizers while attending the hackathon.",
                    "All decisions in the matter of eligibility, authenticity & final judgement will be with the organizers.",
                ]
            }

        ],
        rules: [
            "Liability: The organizers of the event are not responsible for any injuries, loss, or damage including personal properties that may occur during the event.",
            "Code of Conduct: Participants are expected to behave in a professional and respectful manner towards other participants, staff, and event organizers. Any form of harassment or discrimination will not be tolerated, and the organizers reserve the right to remove any participant who violates this policy.",
            "Privacy Policy: Participant data collected during the registration process will be used solely for event-related communication and will not be shared with any third party.",
            "Disclaimer: The organizers of the event make every effort to provide accurate and up-to-date information about the event. However, they are not responsible for any errors or omissions in the event information.",
            "Admission to the event is at the discretion of the event organizers. The organizers reserve the right to refuse entry or remove any person from the event without giving a reason.",
            "The event organizers reserve the right to change the date, time, location, or any other aspect of the event without notice.",
            "The number of participants we filter through each round may be subject to change.",
            "Force Majeure: The organizers reserve the right to postpone or cancel the event in case of unforeseeable circumstances such as natural disasters, pandemics, or other emergencies."
        ],
        type: "TECHNICAL",
        pool: 75000,
        banner: matrixBanner,
        link: "https://unstop.com/hackathons/analytics-arena-abhisarga-2023-indian-institute-of-information-technology-iiit-sri-city-634488"
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
        registration: {
            start: "March 7, 9:00 PM",
            end: "March 30, 12:00 PM",
        },
        qoute: "Talk is cheap. Show me your creativity.",
        rounds: [
            {
                roundNumber: 1,
                name: "Online Screening",
                type: "ONLINE",
                
                event: {
                    start : "March 10, 12:00 AM",
                    end: "March 31, 12:00 AM"
                },
                roundDesc: [
                    "There is no entry fee to participate in the competition",
                    " Film can be in any language but, the appropriate subtitles in English should be provided.",
                    " A maximum of 10 groups per college is allowed.",
                    "The top 5-10 entries will be screened offline for the audience.",
                    "A google form will be circulated in which you have to submit your short film.",
                    "Upload your short film in YouTube so that would be easy to access."
                ]							
            },
            {
                roundNumber: 2,
                type: "ONLINE",
                event: {
                    start : "March 21, 9:00 AM	",
                    end: "March 22, 6:00 PM	"
                },
                roundDesc: [
                    "The groups which are qualified for the 2nd round need to select slips by lottery in which different props will be provided by using those props they need to take a reel or short video or perform an property act ."
                ],
                roundRules: [
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
        rules: [
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
        ],
        type: "CULTURAL",
        pool: 15000,
        banner: miseEnSceneBanner2,
        link: "https://unstop.com/events/mini-masterpiece-mm-a-short-film-competition-abhisarga-2023-indian-institute-of-information-technology-sri-city-i-633378"
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
        registration: {
            start: "March 8, 9:00 AM",
            end: "March 22, 6:00 PM	",
        },
        qoute: "Build With Fun",
        rounds: [
            {
                roundNumber: 1,
                type: "ONLINE",
              
                event: {
                    start : "March 24, 4:30 PM	",
                    end: "March 24, 6:30 PM	"
                },
                roundDesc: [
                    "Hosting a virtual event which can effectively filter the potential candidates who has the ability to create a solution for a pre existing problems by applying his theoretical knowledge into practical applications. All the registered teams would be participating this stage, where we are purifying the top performing teams. Then these teams are further invited to the campus for subsequent stages."
                ]
                ,		
                roundRules: [
                    "Stage 1 questions would be based on Embedded systems and relavant topics .",
                    "Number of questions for stage 1 would be 30.",
                    "Would be conducted in Quizizz.",
                    "Top 20% teams would be selected for stage 2 (offline).",
                ]									
                
            },
            {
                roundNumber: 2,
                type: "OFFLINE",
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
                    "50% teams would be selected after the filtering process in stage 2."
                ]
                
            },
            {
                roundNumber: 3,
                type: "OFFLINE",
                event: {
                    start : "April 7, 11:00 AM",
                    end: "April 9, 2:00 PM"
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
            "A team with triplet or quartet preffered with three hardware experts and a software expert.(the breakup is upto teams wish).",
            "Inter-college team members not allowed.",
            "Inter-specialization team members allowed.",
            "Team names can be fixed as per your wish, else random name would be assigned by unstop.",
            "In stage 3, students must only utilise the components given by the organising committe, to build the prototype.",
            "If any team is found guilty of Unfair Means(UFM), they would be ruled out of the contest.",
            "The UFM might be in any form including malpracticing, damaging other prototypes etc."
        ],
        type: "TECHNICAL",
        pool: 75000,
        banner: connexionBanner,
        link: "https://unstop.com/hackathons/gizmocon-abhisarga-2023-indian-institute-of-information-technology-sri-city-indian-institute-of-information-t-633656"
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
        registration: {
            start: "March 8, 11:58 PM",
            end: "March 22, 5:00 PM	",
        },
        qoute: "Talk is cheap. Show me the code.",
        rounds: [
            {
                roundNumber: 0,
                name: "Quiz Round (on Unstop)",
                type: "ONLINE",
                roundDesc: [
                    "This will be an online quiz round! You will see the “Play” button here, once the round is live. Questions would be based on: Aptitude Reasoning (10), Computer Fundamentals (10), App DEV (5), Web DEV (5)."
                ],
                event: {
                    start : "March 22, 6:00 PM",
                    end: "March 23, 11:59 PM"
                }

            },
            {
                roundNumber: 1,
                name: "Ideation Round (via Unstop)",
                type: "OFFLINE",
                event: {
                    start : "March 24, 5:00 PM",
                    end: "March 30, 5:00 PM	"
                },
                roundDesc: [
                    "This will be a submission round! You will see the “Submit” button here, once the round is live. The Hackathon Themes would be released in this (Ideation) Round. We will release a PPT Template, which would have to be edited with the chosen theme and submitted right here. The shared PPT would have all the details the participants require to continue in HackFrenzy."
                ]
    
            },
            {
                roundNumber: 2,
                name: "Hackathon Round @IIIT Sri City",
                type: "OFFLINE",
                event: {
                    start : "April 7, 12:00 AM	",
                    end: "April 8, 12:30 PM	"
                },
                roundDesc: [
                    "This is the offline/in-person Finals, which will take place at Indian Institute of Information Technology, Sri City Campus."
                ]
                
            }

        ],
        rules: [
            "Individual teams will comprise 3-5 members who can be from different colleges or different streams or both.",
            "Participants selected for the next stage will be requested to come to the Indian Institute of Information Technology, Sri City campus and are required to stay on the campus for both April 7th and 8th.",
            "Participants should bring their own laptop, hardware and software support to develop their ideas.",
            "Participants must ensure that all materials, including software code, images and videos, used in their hackathon submission comply with all relevant intellectual property laws and are not plagiarised or copied.",
            "The organizers will provide a workspace for all participants and necessary equipment such as power outlets and Wi-Fi.",
            "Participants must submit their final project by the end of the hackathon.",
            "All participants must adhere to the college's code of conduct and maintain a respectful and collaborative environment.",
            "The organizers reserve the right to disqualify any team for inappropriate behaviour or violation of rules.",
            "The final decision will be given by the judges and will be binding. ",
            "Living Accommodation and Food Services would be provided to the teams, either free or at very nominal charges."
        ],
        type: "TECHNICAL",
        pool: 75000,
        banner: iotaXgdscBanner,
        link: "https://unstop.com/hackathons/hackfrenzy-abhisarga-2023-indian-institute-of-information-technology-iiit-sri-city-633631"
    },
    {
        name: "Drive to Drama",
        club: "Mise-En-Scene",
        description: `A Theatre competition (skit) where participants compete with other teams on basis of  essence of their act. participants are allowed to do any kind of drama or act on stage (suggested to bring their own props).`,
        registration: {
            start: "March 7, 9:00 PM ",
            end: "March 30, 12:00 PM ",
        },
        qoute: "Talk is cheap. Show me what you can do.",
        rounds: [
            {
                roundNumber: 1,
                type: "OFFLINE",
                
                event: {
                    start : "April 9, 5:00 PM",
                    end: "April 9, 7:00 PM	"
                },
                roundDesc: [
                    "A Theatre competition (skit) where participants compete with other teams on basis of essence of their act. participants are allowed to do any kind of drama or act on stage (suggested to bring their own props)."
                ],
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
        rules: [
            "Vulgarity is strictly prohibited and can lead to disqualification.",
            "Obscenity of any kind that is harmful to the interests or beliefs of specific but not limited to social, economic,  religious, gender or political groups will lead to the disqualification of the team.",
            "The decision of the judging panel will be final and binding.",
            "Duration: The act should not exceed from 7-15 minutes .",
            "Theme flexibility: The theme of the act can be anything (but not offensive in terms of  discrimination, foul language is forbidden).",
            "On-Stage: The judgement will be according to following criteria's:",
            "Acting skills",
            "Script writing",
            "Dialogue delivery",
            "Behaviour on stage",
            "Living Accommodation and Food Services would be provided to the teams who are for offline rounds, either free or at very nominal charges.",
            "Participants should upload the college id where the photo should be included in the id while registration."
        ],
        type: "CULTURAL",
        pool: 15000,
        banner: miseEnSceneBanner1,
        link: "https://unstop.com/events/drive-to-drama-dd-on-stage-abhisarga-2023-indian-institute-of-information-technology-sri-city-indian-institute-of-633388"
    },
    {
        name: "ATMUN",
        club: "Literary Club",
        description: `Welcome to the Abhisarga Techno-cultural fest Model United Nations (ATMUN)!

        This will be a two day event to be held on April 7th and 8th. Our MUN will only have the United Nations Human Right Council. 
        
        ATMUN will provide students a platform where they can sharpen their  leadership and diplomatic skills, decision making, engage in constructive debates, enhance their understanding of Geo-politics and international relations. 
        
        Join us for this exciting and challenging experience!`,
        registration: {
            start: "March 6th, 9:00 AM	",
            end: "March 31, 12:00 AM	",
        },
        qoute: "Diplomacy, Debate, and Deliberation",
        rounds: [
            {
                roundNumber: 1,
                name: "Conference",
                type: "ONLINE",
                
                event: {
                    start : "April 7, 10:00 AM	",
                    end: "April 8, 6:00 PM"
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
        type: "CULTURAL",
        pool: 40000,
        banner: litercyClubBanner,
        link: "https://unstop.com/conferences/techno-cultural-model-united-nations-abhisarga-2023-indian-institute-of-information-technology-sri-city-indi-633308"
    },
    {
        name: "The Ultimate Dance Battle",
        club: "Beatripperz",
        description: `Welcome to The Ultimate Dance Battle

        Dancing with the feet is one thing, but dancing with the heart is another.Get ready to set the stage on fire with your moves.
        
        Let dance speak your emotions,thoughts and style together.`,
        registration: {
            start: "March 10, 9:00 AM",
            end: "March 25, 6:00 PM	",
        },
        qoute: "Talk is cheap. Show me what you can do.",
        rounds: [
            {
                roundNumber: 1,
                type: "ONLINE",
                name: "Pick You Poison",
                event: {
                    start : "March 9, 6:00 PM",
                    end: "March 28, 11:59 PM"
                },
                roundDesc: [
                    "Pick Your Poison; This is a non-theme group-dance competition where guest institutes would participate",
                ],
                roundRules: [
                    "This is a non-theme group-dance competition where guest institutes are required to submit a video.The duration of the video should be of 3-7 mins. The video has to be in the size of 50MB.",
                    "Team size: 5-15",
                    "Duration should not exceed 7 min.",
                    "The song should not contain any foul language.",
                    "Only video compilation is allowed, No additional effects/editing.",
                    "Plagarism will lead to disqualification.",
                    "Top teams will go to the next round  and the remaining teams will me eliminated ",
                    "Judges will decide how many people to eliminate from round 1 based on the registrations received ",
                    "Judgment will be based on dance moves, expressions, selection of the music piece, props and costumes",
                    "Naming format: TeamName_collegeName_Abhisarga",
                ]									
                
            },
            {
                roundNumber: 2,
                type: "OFFLINE",
                name: "Battle of the Beats",
                event: {
                    start : "April 8, 5:30 AM",
                    end: "April 8, 10:00 PM	"
                },
                roundDesc: [
                    "Themes provided: Classical,Retro,Mass .Participants have to choose only one theme from the above mentioned themes."
                ],
                roundRules: [
                    "This is a theme group-dance competition where the  selected teams will participate.",
                    "Themes provided:",
                    "Classical",
                    "Retro",
                    "Mass",
                    "Participants have to choose only one theme from the above mentioned themes.",
                    "Duration: 4 min - 7 min",
                    "The top 5 groups with highest marks will be allowed to advance to the next round"
                ]									
                
            },
            {
                roundNumber: 3,
                name: "Step-Up Showdown",
                type: "OFFLINE",
                event: {
                    start : "April 8, 5:30 PM",
                    end: "April 8th, 10:00 PM"
                },
                roundDesc: [
                    "Themes provided: Locking,Breaking, Whacking.Mentioned all three themes should be there in the performance.",
                ],
                roundRules: [
                    "This is a theme group-dance competition where the selected teams will participate",
                    "Themes provided:",
                    "Locking",
                    "Breaking",
                    "Whacking",
                    "Mentioned all three themes should be there in the performance.",
                    "Duration: 4 min - 7 min.",
                    "The group with highest marks will be declared as winners and the group with the next highest score will be declared as 1st runner up and the 2nd runner up.",
                    "Marks will be awarded based on the choreography, justification to the theme,costumes, coordination & involvement of the group."
                ]									
                
            }
        ],
        rules: [
                "Max of 3 teams from a single college can participate.",
                "The event comprises 3 rounds.",
                " Best will be taken on cumulative scores by the judge.",
                "Group name and institute name should be mentioned while registering.",
                "Three rounds are to be held in IIIT Sri City Campus on 8th of April 2023.",
                "In case of any unforeseen circumstances, the committee has the sole authority to make decisions."
        ],
        type: "CULTURAL",
        pool: 60000,
        banner: beatRipperzBanner,
        link: "https://unstop.com/events/the-ultimate-dance-battle-abhisarga-2023-indian-institute-of-information-technology-sri-city-indian-institute-of--634472"
    },
    {
        name: "Elektra",
        club: "Gradient",
        description: "",
        registration: {
            start: "Started",
            end: "30 Mar 23, 12:00AM"
        },
        qoute: "Talk is cheap. Show me the code.",
        rounds: [
            {
                type: "ONLINE",
                name: "Elektra: Round 1",
                roundDesc: [
                    "This will be a coding contest on Unstop! You will see the “Code” button here, once the round is live."
                ],
                event: {
                    start: "31 Mar 23, 08:00PM",
                    end: "31 Mar 23, 10:00PM",
                },
                
            },
            {
                type: "OFFLINE",
                name: "Final Round",
                roundDesc: [
                    "This round will be conducted offline at the campus of IIIT Sri City as part our techno-cultural fest Abhisarga"
                ],
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
        ],
        type: "TECHNICAL",
        pool: 60000,
        banner: gradientBanner,
        link: "https://unstop.com/hackathons/elektra-coding-contest-abhisarga-2023-indian-institute-of-information-technology-iiit-sri-city-633450"
    },
    {
        name: "Innovate Or Iterate",
        club: "Epoch",
        description: `Welcome to our exciting hackathon event!

        Get ready to unleash your creativity and problem-solving skills in a collaborative environment with like-minded individuals. Our hackathon will be an intensive, fun, and challenging event where you will have the opportunity to work with others to create innovative and impactful solutions.
        
        Over the course of 48 hrs, you will work on developing and presenting your ideas to a panel of expert judges. 
        
        This hackathon is open to all skill levels and backgrounds, so whether you are a seasoned programmer or a newcomer to the tech world, there is a place for you on our teams. Come with an open mind, a willingness to learn, and a passion for creating positive change.
        
        So, what are you waiting for? Register now and join us for an unforgettable hackathon experience that could change the course of your career!`,
        registration: {
            start: "March 10, 1:00PM",
            end: "March 23, 12:00AM"
        },
        qoute: "Talk is cheap. Show me the code.",
        rounds: [
            {
                roundNumber: 1,
                type: "ONLINE",
                name: "Quiz Round (Qualifiers)",
                roundDesc: [
                    "This will be a quiz round which will consist of questions about basic Machine Learning and related the Math. Let's see who can answer the most questions in the least time. The top 18 teams will qualify for the offline rounds."
                ],
                roundRules: [
                    "Quiz Round will be conducted on Quizizz and the top 18 teams will qualify to attend the rest of the rounds online.",
                    "There will be approximately 30 questions, which will test your basic Machine Learning skills.",
                    "Duration: 1 hour",
                ],
                event: {
                    start: "Mar 26, 10:00AM",
                    end: "Mar 26, 11:30PM",
                },
                
            },
            {
                roundNumber: 2,
                type: "OFFLINE",
                name: "Crack The Function",
                roundDesc: [
                    "Congratulations on qualifying the Quiz Round. In this round, teams will be given a set of independent variables and the resulting value when plugged into a random function. Your job is to find the function that is closest to the actual function."
                ],
                roundRules: [
                    "The top 9 teams will move forward to the Final round.",
                    "Duration: 3 hours"
                ],
                event: {
                    start: "April 7, 11:00AM",
                    end: "April 7, 02:00PM"
                }
            },
            {
                roundNumber: 3,
                type: "OFFLINE",
                name: "EmojiMania",
                roundDesc: [
                    "Welcome to the Final Round. You will be given a dataset hand made by us specifically for this round. Given a dataset of hand-drawn emojis, you will have to classify them correctly. Keep in mind that these images might be rotated, cropped or shifted. Let's see who handles this data the best."
                ],
                roundRules: [
                    "The top 3 teams will be given prizes. Duration: 5 hours.",
                ],
                event: {
                    start: "April 8, 10:00AM",
                    end: "April 8, 04:00PM"
                }
            }
        ],
        rules: [
            "The questions in the Quiz Round will be prepared by a faculty and/or an external guest. There is no collusion with any party.",
            "All judging criteria will be transparent and will be shown to all teams as a leaderboard table.",
            "Any team that is found to be colluding or communicating with other teams during the course of any rounds will be disqualified.",
            "There should not be any sharing of laptops or material with any other groups.",
            "Accommodation and food will be provided to all the participants selected for the offline rounds."
        ],
        type: "TECHNICAL",
        pool: 75000,
        banner: mlBattlesBanner,
        link: "https://unstop.com/hackathons/innovate-or-iterate-abhisarga-2023-indian-institute-of-information-technology-iiit-sri-city-634554"
    },
    {
        name: "Camera ON",
        club: "F/Stops",
        description: `Join our Mix-Up Photography Contest! Take stunning panoramic, macro, and sunset photos as a team with your mobiles and win the grand prize!`,
        registration: {
            start: "March 10, 08:00AM",
            end: "March 28, 12:00AM"
        },
        rounds: [
            {
                type: "ONLINE",
                name: "Street Photography",
                roundDesc : [
                    "This is an online round based on street photography. Submit the pictures (through UnStop) according to the format: fstops_abhisarga2023_[your name]"
                ],
                event: {
                    start: "March 29, 12:00AM",
                    end: "March 31, 12:00AM",
                },
               
            },
            {
                type: "OFFLINE",
                name: "Panorama Photography",
                roundDesc: [
                    "This is an offline round based on Panorama Photography (mobile only)"
                ],
                event: {
                    start: "April 7, 04:00PM",
                    end: "April 7, 05:30PM"
                }
            },
            {
                type: "OFFLINE",
                name: "Macro and Sunset Photography",
                roundDesc: [
                    "This is an offline round based on Macro and Sunset photography (mobile only)"
                ],
                event: {
                    start: "April 8, 04:00PM",
                    end: "April 8, 05:30PM"
                }
            }
        ],
        rules: [
            "Participants should take pictures with a Mobile only.",
            "Each photograph submitted should contain the Location info (GPS Coordinates), the Date & Time of capture in the EXIF Data.",
            "There should be no watermarks of any form on the image",
            "Post processing the image in any form is not allowed.",
            "Same photo should not be submitted by more than one contestant. If found contestants will be disqualified.",
            "Pictures should be taken only within the event venue when the event is going on. No previously clicked images allowed",
            "No previously clicked images are allowed.",
            "The Photos are to be submitted to the members of the organization during the respective time slots in the respective rooms (mentioned on the website) (a trailing mail will be forwarded later regarding the submission)."
        ],
        type: "CULTURAL",
        pool: 40000,
        banner: fStopsBanner,
        link: "https://unstop.com/events/camera-on-abhisarga-2023-indian-institute-of-information-technology-iiit-sri-city-640356"
    },
    {
        name: "Rhythm Riot - The Music Battle",
        club: "Reverb",
        description: `A competition where musical bands, consisting of multiple musicians playing various instruments and vocals, compete against each other to showcase their talents and win prizes.

        This competition may feature different genres of music, and judges will evaluate the bands based on factors such as musicality, stage presence, and overall performance.
        
        Get ready to rock and roll! Join us for a music experience that will leave you grooving for days!`,
        registration: {
            start: "March 10, 08:00AM",
            end: "March 31, 12:00AM"
        },
        rounds: [
            {
                type: "OFFLINE",
                name: "Offline Round 1",
                event: {
                    start: "April 7, 06:00PM",
                    end: "April 7, 10:00PM"
                },
                roundRules: [
                    "Single 5-8 minutes performance from each band",
                    "Top 6 bands will be selected for the next round",
                    "Round 1 is just a qualification round. Scores from round 1 will not be taken for consideration in final round"
                ]
            },
            {
                type: "OFFLINE",
                name: "Offline Round 2",
                event: {
                    start: "April 9, 07:00PM",
                    end: "April 9, 08:00PM"
                },
                roundRules: [
                    "Single 5-8 minutes performance from each band.",
                    "Teams selected for final round will get a day for preparation.",
                    "Top 6 bands will compete for the winner title and a grand cash prize"
                ]
            }
        ],
        rules: [
            "The event will be held offline at our campus.",
            "Inter-college teams are not allowed.",
            "A band can have any number of vocalist, instrumentalist, beatboxers,etc",
            "You can bring your own Instruments as well as use our instruments(Instrument list will be given below).",
            "Any genre/language is allowed.",
            "No track/karaoke is allowed.",
            "Teams are advised to prepare for both rounds.",
            "Judges' decision is final and binding.",
            "If any team is found guilty of malpractice, they would be ruled out of the contest.",
            "Living Accommodation and Food Services would be provided to the teams who qualify for offline rounds, either free or at very nominal charges."
        ],
        type: "CULTURAL",
        pool: 60000,
        banner: fStopsBanner,
        link: "https://unstop.com/events/camera-on-abhisarga-2023-indian-institute-of-information-technology-iiit-sri-city-640356"
    },
    {
        name: "TECHNICAL EVENT TEST",
        tyoe: "TECHNICAL"
    }
] as Event[]
events.forEach(e => e.getUrl = (color: string) => encrypt(`${e.club}=>${e.name}=>${color}`))

export const technicalEvents = events.filter(e => e.type==="TECHNICAL")
export const culturalEvents = events.filter(e => e.type==="CULTURAL")
export const colors = ["#FF68A8", "#64CFF7", "#01a863", "#CA7CD8", "#3968CB"];

export interface Timings {
    start: string
    end: string
}

export interface Round {
    roundNumber?: number
    name: string
    type: "ONLINE" | "OFFLINE"
    roundDesc?: string[]
    event: Timings
    roundRules?: string[]
}

export interface Event {
    name?: string
    club?: string
    description?: string
    rounds?: Round[]
    type?: "TECHNICAL" | "CULTURAL"
    rules?: string[]
    banner?: string
    pool?: number
    link?: string
    qoute?: string
    registration?: Timings
    getUrl?: (color: string) => string
}

export interface Session {
    _id?: any
    token: string
    username: string
    timestamp: string
}
