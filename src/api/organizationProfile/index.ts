export default (app) => {
  app.get(
    `/tenant/:tenantId/organization-profile/id`,
    require('./organizationProfileId').default,
  );
  app.post(
    `/tenant/:tenantId/organization-profile`,
    require('./organizationProfileCreate').default,
  );
  app.put(
    `/tenant/:tenantId/organization-profile/:id`,
    require('./organizationProfileUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/organization-profile/import`,
    require('./organizationProfileImport').default,
  );
  app.delete(
    `/tenant/:tenantId/organization-profile`,
    require('./organizationProfileDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/organization-profile/autocomplete`,
    require('./organizationProfileAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/organization-profile`,
    require('./organizationProfileList').default,
  );
  app.get(
    `/tenant/:tenantId/organization-profile/:id`,
    require('./organizationProfileFind').default,
  );
};
