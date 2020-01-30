const createVisit = ssn => {
    // TODO: Validate SSN
    console.log(ssn);
    // TODO: Create new visit (save in DB)
    return { id: "unique id" };
};

const updateVisit = visit => {
    // TODO: Validate visit format
    console.log(visit);
    // TODO: Update visit (save in DB)
    return { id: "unique id" };
};

const getVisit = ssn => {
    // TODO: Get from DB
    return {id: "unique id"}
};

export {createVisit, updateVisit, getVisit};