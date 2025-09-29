import { type RouteConfig, index, route } from "@react-router/dev/routes";
export default [
   index("routes/home/home.tsx"),
   route("talent-flow", "routes/talentFlowService/talentFlowService.tsx"),
   route("landing-service", "routes/landingService/landingService.tsx"),
   route(
      "lead-processing",
      "routes/leadProcessingService/leadProcessingService.tsx"
   ),
   route("creative-ads", "./routes/creativeAdsService/creativeAdsService.tsx"),
   route(
      "ad-management",
      "./routes/adManagementService/adManagementService.tsx"
   ),
   route("tg-network", "./routes/tgNetworkService/tgNetworkService.tsx"),
   route("contact", "./routes/contact/contact.tsx"),
   route("privacy-policy", "./routes/privacyPolicy/privacyPolicy.tsx"),
   route("consent-page", "./routes/consentPage/consentPage.tsx"),
   route("blog", "./routes/blog/blog.tsx"),
   route(
      "case-lead-generation",
      "./routes/caseLeadGeneration/caseLeadGeneration.tsx"
   ),
] satisfies RouteConfig;
