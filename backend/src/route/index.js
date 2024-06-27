const express = require("express");
const authRoute = require("./authRoute");
const candidateRoute = require("./candidatesRoute");
const siblingRoute = require("./siblingsRoute");
const parentRoute = require("./parentsRoute");
const healthFormRoute = require("./healthFormRoute");
const medicalHistoryRoute = require("./medicalHistoryRoute");
const globalAttachmentRoute = require("./globalAttachmentRoute");
const paymentRoute = require("./paymentRoute");
const relationshipRoute = require("./relationshipRoute");
const engagementRoute = require("./engagementRoute");
const senseRoute = require("./senseRoute");
const questionnaireRoute = require("./questionnaireRoute");
const provinceRoute = require("./provinceRoute");
const cityRoute = require("./cityRoute");
const districtRoute = require("./districtRoute");
const subDistrictRoute = require("./subDistrictRoute");
const roleRoute = require("./roleRoute");
const paymentRefRoute = require("./paymentRefRoute");
const announcementRoute = require("./announcementRoute");
const regInvoiceRoute = require("./regInvoiceRoute");
const fileTemplateRoute = require("./fileTemplateRoute");
const notificationRoute = require("./notificationRoute");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/candidate",
    route: candidateRoute,
  },
  {
    path: "/sibling",
    route: siblingRoute,
  },
  {
    path: "/parent",
    route: parentRoute,
  },
  {
    path: "/health-form",
    route: healthFormRoute,
  },
  {
    path: "/medical-history",
    route: medicalHistoryRoute,
  },
  {
    path: "/attachment",
    route: globalAttachmentRoute,
  },
  {
    path: "/payment",
    route: paymentRoute,
  },
  {
    path: "/relationship",
    route: relationshipRoute,
  },
  {
    path: "/engagement",
    route: engagementRoute,
  },
  {
    path: "/sense",
    route: senseRoute,
  },
  {
    path: "/questionnaire",
    route: questionnaireRoute,
  },
  {
    path: "/province",
    route: provinceRoute,
  },
  {
    path: "/city",
    route: cityRoute,
  },
  {
    path: "/district",
    route: districtRoute,
  },
  {
    path: "/sub-district",
    route: subDistrictRoute,
  },
  {
    path: "/role",
    route: roleRoute,
  },
  {
    path: "/payment-ref",
    route: paymentRefRoute,
  },
  {
    path: "/announcement",
    route: announcementRoute,
  },
  {
    path: "/pdf",
    route: regInvoiceRoute,
  },
  {
    path: "/file-template",
    route: fileTemplateRoute,
  },
  {
    path: "/notification",
    route: notificationRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
