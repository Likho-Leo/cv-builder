
function ContactForm({cv, setCv}){
    return(
        <>
            <section className="cv-section">
                <h2> 
                Contact Details
            </h2>

            <input
                type="text"
                placeholder="Full name"
                value={cv.contact.fullName}
                onChange={(e) => 
                   setCv({
                    ...cv,
                    contact:{
                        ...cv.contact,
                        fullName: e.target.value,
                    },
                   })
                }
            />
            <input 
                type ="tel"
                placeholder="Phone number"
                value={cv.contact.phone}
                onChange={(e) =>
                    setCv({
                        ...cv,
                        contact:{
                            ...cv.contact,
                            phone: e.target.value,
                        },
                   })
               }
            />

            <input
                type="email"
                placeholder="Email"
                vlaue={cv.contact.email}
                onChange={(e) => 
                    setCv({
                        ...cv,
                        contact:{
                            ...cv.contact,
                            email: e.target.value,
                        },
                   })
                 }
            />

            <input
                type="url"
                placeholder="LinkedIn url"
                value={cv.contact.linkedIn}
                onChange={(e) => 
                    setCv({
                        ...cv,
                        contact:{
                            ...cv.contact,
                            linkedIn: e.target.value,
                        },
                   })
                }
            />

            <input
                type="url"
                placeholder="Github url"
                value={cv.contact.github}
                onChange={(e) => 
                    setCv({
                    ...cv,
                    contact:{
                        ...cv.contact,
                        github: e.target.value,
                    },
                   })
                }
            />
            </section>
        </>
    );
}

export default ContactForm;