import { faImage, faTextWidth, faVolumeUp, faCube } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        id: 1,
        heading: 'Lesson Previews',
        content: 'The ministry conducts weekly lesson preview every Thursday as from 8 -9pm in googlemeet led by the ministry families and this is opened for everyone .',
        to: '/',
        icon: faImage, // FontAwesome icon for image annotation
        contents: [
            {
                heading: 'Fortnight Studies',
                img: '/assets/individualService/image_video_1.png',
                content: 'Fortnight studies(after every two weeks) to delve deep imto various present truth messages.This is also open for everyone to learn together at the feet of Christ.'
            },
            {
                heading: 'Annual General Mettings',
                img: '/assets/individualService/image_video_2.png',
                content: 'Once in a year the ministry meets for the AGM.It maybe intertwined with the mission,the program is important because it marks the start of the spiritual year for the ministry'
            },
        ]
    },
    {
        id: 2,
        heading: 'Church Outreaches',
        content: 'The ministry does outreaches both by the general chapter and the students chapter in any church that invites them,provided all the circumstances met.',
        to: '/',
        icon: faTextWidth, // FontAwesome icon for text annotation
        contents: [
            {
                heading: 'Entity Recognition',
                img: '/assets/individualService/text_1.png',
                content: 'We provide entity recognition services to identify and label important entities within your text, such as names, dates, locations, and more.'
            },
            {
                heading: 'Text Classification',
                img: '/assets/individualService/text_2.png',
                content: 'Our team helps categorize large amounts of text into predefined categories, such as sentiment analysis or topic classification, for more efficient data processing.'
            },
        ]
    },
    {
        id: 3,
        heading: 'Annual General Mettings',
        content: 'Once in a year the ministry meets for the AGM.It maybe intertwined with the mission,the program is important because it marks the start of the spiritual year for the ministry',
        to: '/',
        icon: faVolumeUp, // FontAwesome icon for audio annotation
        contents: [
            {
                heading: 'Speech-to-Text Conversion',
                img: '/assets/individualService/audio_1.png',
                content: 'We offer accurate audio transcription services, converting spoken words into text for further analysis and integration into speech recognition systems.'
            },
            {
                heading: 'Audio Categorization',
                img: '/assets/individualService/audio_2.png',
                content: 'We categorize audio files based on content, such as identifying specific speakers, sounds, or emotions in audio data to train AI models for better performance.'
            },
        ]
    },
    {
        id: 4,
        heading: 'Fortnight Studies',
        content: 'Fortnight studies(after every two weeks) to delve deep imto various present truth messages.This is also open for everyone to learn together at the feet of Christ.',
        to: '/',
        icon: faCube, // FontAwesome icon for 3D point cloud annotation
        contents: [
            {
                heading: 'Precise 3D Object Labeling',
                img: '/assets/individualService/pointcloud_1.png',
                content: 'We label 3D point clouds for accurate recognition of objects, such as vehicles, buildings, and roads, to improve machine learning models in autonomous systems.'
            },
            {
                heading: 'Geospatial Data Annotation',
                img: '/assets/individualService/pointcloud_2.png',
                content: 'Our 3D point cloud annotation services support geospatial data analysis, enhancing models used for mapping, construction, and urban planning.'
            },
        ]
    },
];

export default data;
