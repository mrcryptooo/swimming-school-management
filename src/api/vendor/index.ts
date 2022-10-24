export default (app) => {
  app.post(
    `/tenant/:tenantId/vendor`,
    require('./vendorCreate').default,
  );
  app.put(
    `/tenant/:tenantId/vendor/:id`,
    require('./vendorUpdate').default,
  );
  app.put(
    `/tenant/:tenantId/vendor/:id/tags`,
    require('./vendorTags').default,
  );
  app.post(
    `/tenant/:tenantId/vendor/import`,
    require('./vendorImport').default,
  );
  app.delete(
    `/tenant/:tenantId/vendor`,
    require('./vendorDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/vendor/autocomplete`,
    require('./vendorAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/vendor`,
    require('./vendorList').default,
  );
  app.get(
    `/tenant/:tenantId/vendor/:id`,
    require('./vendorFind').default,
  );
};
