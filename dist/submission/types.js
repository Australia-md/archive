// Shared TypeScript types for Australia.md submission pipeline.
// Imported by both src/submission/ (frontend) and worker/src/ (proxy).
export var SubmissionCategory;
(function (SubmissionCategory) {
    SubmissionCategory["Government"] = "Government";
    SubmissionCategory["Health"] = "Health";
    SubmissionCategory["Education"] = "Education";
    SubmissionCategory["Tourism"] = "Tourism";
    SubmissionCategory["Economy"] = "Economy";
    SubmissionCategory["Culture"] = "Culture";
    SubmissionCategory["Environment"] = "Environment";
    SubmissionCategory["Infrastructure"] = "Infrastructure";
    SubmissionCategory["Science"] = "Science";
    SubmissionCategory["Indigenous"] = "Indigenous";
})(SubmissionCategory || (SubmissionCategory = {}));
export var TemplateType;
(function (TemplateType) {
    // Government & Policy
    TemplateType["GovernmentPolicy"] = "GovernmentPolicy";
    TemplateType["GovernmentAgency"] = "GovernmentAgency";
    TemplateType["GovernmentReport"] = "GovernmentReport";
    // Health & Medical
    TemplateType["HealthPractice"] = "HealthPractice";
    TemplateType["HealthGuideline"] = "HealthGuideline";
    TemplateType["HealthStatistic"] = "HealthStatistic";
    // Education
    TemplateType["EducationInstitution"] = "EducationInstitution";
    TemplateType["EducationPolicy"] = "EducationPolicy";
    TemplateType["EducationStatistic"] = "EducationStatistic";
    // Tourism & Travel
    TemplateType["TourismAttraction"] = "TourismAttraction";
    TemplateType["TourismRegion"] = "TourismRegion";
    TemplateType["TourismStatistic"] = "TourismStatistic";
    // Economy & Finance
    TemplateType["EconomyIndicator"] = "EconomyIndicator";
    TemplateType["EconomyPolicy"] = "EconomyPolicy";
    TemplateType["EconomyIndustry"] = "EconomyIndustry";
    // Culture & Heritage
    TemplateType["CulturalSite"] = "CulturalSite";
    TemplateType["CulturalEvent"] = "CulturalEvent";
    TemplateType["CulturalOrganisation"] = "CulturalOrganisation";
    // Environment & Climate
    TemplateType["EnvironmentFact"] = "EnvironmentFact";
    TemplateType["EnvironmentPolicy"] = "EnvironmentPolicy";
    TemplateType["EnvironmentSpecies"] = "EnvironmentSpecies";
    // Infrastructure & Transport
    TemplateType["InfrastructureProject"] = "InfrastructureProject";
    TemplateType["InfrastructureNetwork"] = "InfrastructureNetwork";
    TemplateType["InfrastructureStatistic"] = "InfrastructureStatistic";
    // Science & Technology
    TemplateType["ScienceResearch"] = "ScienceResearch";
    TemplateType["ScienceFact"] = "ScienceFact";
    TemplateType["ScienceTechnology"] = "ScienceTechnology";
    // Indigenous Australia
    TemplateType["IndigenousCountry"] = "IndigenousCountry";
    TemplateType["IndigenousCulture"] = "IndigenousCulture";
    TemplateType["IndigenousOrganisation"] = "IndigenousOrganisation";
})(TemplateType || (TemplateType = {}));
