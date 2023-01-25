const eligibleData = {
    title: "WHO WILL BE ELIGIBLE AS A TRUSTEE?",
    body: "a) To be eligible as a Trustee, a person must not have a criminal record, or record of insolvency, fraud, forgery etc.\n\n b) Ideally, a Trustee should be financially qualified to understand the accounts and other transactions of the Fund. \n\n c) Training will be provided on the pension Fund law, income tax aspects and other technical aspects regarding the running of the Fund. Ideally the person should be able to understand the issues that need to be decided on by a Fund of this size. \n\n d) Financial Skills will be an added advantage",
    subbody:"a) To be eligible as a Trustee, a person must not have a criminal record, or record of insolvency, fraud, forgery etc.\n\n b) Ideally, a Trustee should be financially qualified to understand the accounts and other transactions of the Fund.",
}

const introductionData = {
    title: "INTRODUCTION",
    body: "NamRA wishes to establish a Provident Fund for its employees as soon as possible. The target date was 1 October 2022 or the date on which NAMFISA registers the Fund if it happens only after 1 October 2022. A board of Trustees will manage the Fund. It will comprise of six members. NamA (employer) will appoint three Trustees and the members of the Fund (employees) must elect three members. Employees must nominate persons who will stand fo the election as member Trustees. The inaugural board will meet as soon as NAMFISA ha registered the rules of the Fund. Trustees serve for a period of five years and may be re-elected for one further period of five years.",
}

const rawData = {
    
    introduction :introductionData,
    eligibility : eligibleData,
    forgotPassword : "Please go to your personal PC to change your password or contact the administrator to successfully change your password."
}


const departmentsList = [
    {
        id: 1,
        name: "All",
        active: true
    },
    {
        id: 2,
        name: "Human Capital  Business Strategy",
        active: false
    },
    {
        id: 3,
        name: "Legal services",
        active: false
    },
    {
        id: 4,
        name: "Domestic Taxes",
        active: false
    },
    {
        id: 5,
        name: "Governance & Executive",
        active: false
    },
    {
        id: 6,
        name: "Information Communication Technology",
        active: false
    },
    {
        id: 7,
        name: "Customs & Excise",
        active: false
    },
    {
        id: 8,
        name: "Strategic Communication, Stakeholder Engagements, Taxpayer Education & International Relations",
        active: false
    },
    {
        id: 9,
        name: "Finance and Corporate Services",
        active: false
    }
]

const candidateList = [
    {
        name: "Ndamonoghenda N Nampweya",
        department: "ICT",
        position: "Human Resource officer",
    }
]

export {
    rawData,
    candidateList,
    departmentsList
}