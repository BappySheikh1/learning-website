import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='bg-dark text-light my-3'>
                <div className='w-50 mx-auto p-3 color-change'>
                   <h3>Question-1: What is cors?</h3>
                   <p>Ans:Cross-Origin Resource Sharing CORS is an HTTP-header based mechanism that allows a server to indicate any origins domain, scheme, or port other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </div>
            </div>
            <div className='bg-dark text-light my-3'>
                <div className='w-50 mx-auto p-3 color-change'>
                   <h3>Question-2: Why are using firebase? What other options do you have to implement Authentication?</h3>
                   <p>Ans:Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Build Fast For Any Device. Release Apps Confidently. Boost App Engagement. Backed by Google. <br />
                   Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                   </p>
                </div>
            </div>
            <div className='bg-dark text-light my-3'>
                <div className='w-50 mx-auto p-3 color-change'>
                   <h3>Question-1: How does the private route work?</h3>
                   <p>Ans:The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                </div>
            </div>
            <div className='bg-dark text-light my-3'>
                <div className='w-50 mx-auto p-3 color-change'>
                   <h3>Question-1: What is Node?How does Node work</h3>
                   <p>Ans:
                    Node.js is an open source server environment <br />
                    Node.js is free <br />
                    Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.) <br />
                    Node.js uses JavaScript on the server <br />
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.!
                    
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;