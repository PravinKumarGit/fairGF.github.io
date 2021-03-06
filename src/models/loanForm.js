import { INCOME_FREQUENCY_OPTIONS } from "../constants/options"

export default class LoanForm {
  constructor(data = {}, initModel = true) {
    if (initModel) {
      this.inIt(data);
    }
  }

  inIt({ values, step }) {
    // step 1
    this.source = "App Screen 1 - Basic info";
    this.loanAmount = values.loanAmount || "";
    this.loanReason = values.loanReason || "";
    this.title = values.title || "";
    this.firstName = values.firstName || "";
    this.middleName = values.middleName || "";
    this.lastName = values.lastName || "";
    this.mobilePhone = values.mobilePhone || "";
    this.emailAddress = values.emailAddress || "";
    this.dateOfBirth = values.dateOfBirth || {
      day: "",
      month: "",
      year: ""
    };
    this.acceptsPrivacyPolicy = values.acceptsPrivacyPolicy || false;
    this.unitNumber = values.unitNumber || "";
    this.streetNumber = values.streetNumber || "";
    this.suburb = values.suburb || "";
    this.street = values.street || "";
    this.state = values.state || "";
    this.postCode = values.postCode || "";
    this.referralConsent = values.referralConsent || false;
    this.incomeFrequency = values.incomeFrequency || INCOME_FREQUENCY_OPTIONS[0].value;
    this.totalIncome = values.totalIncome || "";
    if (step === 1) return;

    // step 2
    this.source = "App Screen 2 - Bank Statements";
    this.bankStatementReferralCode = values.bankStatementReferralCode || "";
    if (step === 2) return;

    // step 3
    this.source = "App Screen 3 - Additional Info";
    this.occupation = values.occupation || "";
    this.employmentBasis = values.employmentBasis || "";
    this.employerName = values.employerName || "";
    this.businessName = values.businessName || "";
    this.employerPhone = values.employerPhone || "";
    this.dateStarted = values.dateStarted || {
      day: 1,
      month: "",
      year: ""
    };
    this.nextPayDate = values.nextPayDate || {
      day: "",
      month: "",
      year: ""
    };
    this.dateStartedAtCurrentAddress = values.dateStartedAtCurrentAddress || {
      day: 1,
      month: "",
      year: ""
    };
    this.numberOfDependents = values.numberOfDependents || "";
    this.livingSituation = values.livingSituation || "";
    this.partnerIncome = values.partnerIncome || "";
    this.residentialStatus = values.residentialStatus || "";
    this.residentialPaymentFrequency =
      values.residentialPaymentFrequency || "";
    this.landlordContactName = values.landlordContactName || "";
    this.landlordContactNumber = values.landlordContactNumber || "";
    this.residentialPayment = values.residentialPayment || "";
    this.weeklyEstimatedCostOfLiving =
      values.weeklyEstimatedCostOfLiving || "";
    this.creditCardCount = values.creditCardCount || "";
    this.totalCreditLimit = values.totalCreditLimit || "";
    this.amountBalance = values.amountBalance || "";

    if (step === 3) return;

    // step 4

    // Additional Documents
    this.source = "App Screen 4 - Thank You";
    this.identificationType = values.identificationType || "";
    this.driversLicenceNumber = values.driversLicenceNumber || "";
    this.driversLicenceCardNumber = values.driversLicenceCardNumber || "";
    this.driversLicenceState = values.driversLicenceState || "";
    this.driversLicenceExpiry = values.driversLicenceExpiry || {
      day: "",
      month: "",
      year: ""
    };
    this.medicareName = values.medicareName || "";
    this.medicareNumber = values.medicareNumber || "";
    this.medicareReference = values.medicareReference || "";
    this.medicareCardColour = values.medicareCardColour || "";
    this.medicareDateExpiry = values.medicareDateExpiry || {
      day: "",
      month: "",
      year: ""
    };
    this.consentsToIdentityVerification =
      values.consentsToIdentityVerification || "";
    // Additional Personal Details
    this.workContactNumber = values.workContactNumber || "";
    this.homePhoneNumber = values.homePhoneNumber || "";
    this.secondaryEmail = values.secondaryEmail || "";
    this.alternateContactName = values.alternateContactName || "";
    this.alternateContactNumber = values.alternateContactNumber || "";
    this.alternateRelationship = values.alternateRelationship || "";
    //and finally
    this.foreseeableChanges = values.foreseeableChanges || "";
    this.foreseeableChangesExplain = values.foreseeableChangesExplain || "";
    this.residencyStatus = values.residencyStatus || "";
    this.accountPk = values.accountPk || "";
    this.accountExternalId = values.accountExternalId || "";
    this.loanSecurity = values.loanSecurity || "";
    this.brokerExternalPartyId = values.brokerExternalPartyId || "";
    this.brokerExternalPartyEmployeeClientEmploymentId =
      values.brokerExternalPartyEmployeeClientEmploymentId || "";
    this.maritalStatus = values.maritalStatus || "";
    this.consentsToScoreSeeker = values.consentsToScoreSeeker || false;
  }
}