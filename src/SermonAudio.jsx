import image1 from './assets/Gallery/image1.jpg';
import image2 from './assets/Gallery/image2.jpg';
import AppStoreIcon from './assets/Gallery/AppStoreIcon.png';
import GooglePlayIcon from './assets/Gallery/GooglePlayIcon.png';
function Gallery() {
    return (
        <>
            <h1>Sermon Audios</h1>
            <p>Sermon Audios is an application about sharing sermon snippets, with narrations for them to be more expressive and caught the attention of the user.</p>
            <div className="gallery" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', padding: '10px' }} >
                <img src={image1} alt="Image 1" width="300px" />
                <img src={image2} alt="Image 2" width="300px" />
                <div style={{ display: 'flex', flexDirection: 'row', gap: '50px', alignItems: 'center' }}>
                    <a href="https://www.apple.com/app-store/" rel="noopener noreferrer" target="_blank"><img src={AppStoreIcon} alt="App Store Icon" width="200px" /></a>
                    <a href="https://play.google.com/store" rel="noopener noreferrer" target="_blank"><img src={GooglePlayIcon} alt="Google Play Icon" width="200px" /></a>
                </div>

            </div>
            <h2>web version</h2>
            <p>Here is a link to the web version of the app. The web version is intended to show the functionality of the app and is not a final version.
                Link to web version : <a href=""></a>
            </p>
            <h2>Support for Sermon Audios</h2>
            <p>If you have any questions or need assistance with the Sermon Audios application, please feel free to reach out to our support team. We are here to help you make the most of the application.</p>
            {/* <h2>Privacy Policy</h2>
            <p> Use the link to access our privacy policy: <a href="https://sites.google.com/view/sermonaudios/home" rel="noopener noreferrer" target="_blank">Privacy Policy</a></p> */}
            <h2>What inspired me to create this application</h2>
            <p> I once heard from someone that told me, there are not bad stories, only bad narrators. Someone can write the best story, but if they can't tell it well, it won't have the desired impact. Sermon Audios was created to provide a platform where stories can be shared with engaging narrations, ensuring they reach their full potential.</p>
            <h2>Drawbacks</h2>
            <p> One of the main drawbacks I had with the application is that users were not particapting with creating a narration for the text. I then decided to remove the whole option to narrate a text from the application. This allowed me to simplify the UI for the users to read the texts, which is where most of the activity occured from users. </p>
            <h2>Complications during development</h2>
            <p>Among minor complications while developing the application, the most notable was releasing the application to Google Play and AppStore. The steps and requirements needed were quite extensive and required careful attention to detail to ensure compliance with their guidelines, such as creating a public company, gathering testers to test the application for two weeks, and ensuring all content met their standards. The previous version
                of the application had a chat feature and profile functionality, which required specific policies and privacy measures in place. The mentioned features were removed, given that users were not interacting with them.
            </p>
            <h2>What I learned</h2>
            <p>Through the development of Sermon Audios, I learned the importance of user engagement and feedback in shaping the features of an application. I also gained valuable experience in navigating the complexities of app store requirements and ensuring compliance with their guidelines. I learned how to make use of databases for user data storage and management, which is crucial for maintaining a seamless user experience.</p>
        </>
    );
}

export default Gallery;