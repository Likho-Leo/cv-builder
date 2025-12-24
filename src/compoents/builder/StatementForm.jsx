function StatementForm({cv, setCv}){
    return(
        <>
            <section className="cv-section">
                <h2> Statement </h2>

                <input
                    type="text"
                    placeholder="Professional Summary"
                    value={cv.statement}
                    onChange={(e) => 
                        setCv({...cv, statement: e.target.value})
                    }
                />
            </section>
        </>
    );
}

export default StatementForm;