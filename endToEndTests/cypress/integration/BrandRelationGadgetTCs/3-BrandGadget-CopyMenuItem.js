const loginUtils = require('../../utils/loginUtils');
const changeDropdownUtils = require('../../utils/changeDropdownUtils');
const anyGadgetUtils = require('../../utils/anyGadgetUtils');
const browserGadgetUtils = require('../../utils/browserGadgetUtils');

describe('Brand Relation Gadgets - Copy MenuItem',function(){
    const multiInstance = '#arrow-idx_1190';
   it('TC21-Un-check the check-box of any instance child-object,Copy menu-item is disabled',function(){
    
        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        browserGadgetUtils.setStructureType('!0EggVendorParent');  
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');        
        const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
        thisGadget().openGadgetHamburger();
        cy.get("#Vendor-menu").find("li").should('contain','Copy').should('be.disabled');

    loginUtils.logoutFromAMI(); 
    cy.wait(100);
  });
  it('TC22-Check the check-box of any instance child-object,Copy menu-item is enabled',function(){
    
    loginUtils.loginToAMI('cypress1');
    changeDropdownUtils.changeWorkspace('QA Relations With Browse');
    anyGadgetUtils.openGadgetOrGroup('Browse');
    browserGadgetUtils.setStructureType('Brands');
    browserGadgetUtils.setBrowseContext('Cypress', false); 
    browserGadgetUtils.setStructureType('!0EggVendorParent');  
    anyGadgetUtils.openGadgetOrGroup('Brand Relations');
    cy.get(multiInstance).click();
    cy.wait(1000);
    cy.get('#check-8-idx_2735-22066').check();     
    
    const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
    thisGadget().openGadgetHamburger();
    cy.get("#Vendor-menu").find("li").should('contain','Copy').should('be.visible');

   loginUtils.logoutFromAMI();
   cy.wait(100); 
});
    it('TC23-Check the check-box of any Brand relation attribute, then Paste option is enabled',function(){
    
        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        browserGadgetUtils.setStructureType('!0EggVendorParent');  
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');   
        cy.get(multiInstance).click();
        cy.get('#check-8-idx_2735-22066').check();
        cy.wait(1000);

        const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
        thisGadget().openGadgetHamburger();
        cy.get("#Vendor-menu").find("li").should('contain','Paste').should('be.visible');

      loginUtils.logoutFromAMI(); 
      cy.wait(100);
   });
   it('TC24-Check the check-box of any Brand relation attribute, then Paste option is disabled',function(){
    
    loginUtils.loginToAMI('cypress1');
    changeDropdownUtils.changeWorkspace('QA Relations With Browse');
    anyGadgetUtils.openGadgetOrGroup('Browse');
    browserGadgetUtils.setStructureType('Brands');
    browserGadgetUtils.setBrowseContext('Cypress', false);
    browserGadgetUtils.setStructureType('!0EggVendorParent');  
    anyGadgetUtils.openGadgetOrGroup('Brand Relations');   
    cy.get(multiInstance).click();
    cy.get('#check-8-idx_2735-22066').check();
    
    const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
    thisGadget().openGadgetHamburger();
    cy.get("#Vendor-menu").find("li").should('contain','Paste').should('be.disabled');

    loginUtils.logoutFromAMI(); 
    
   });
});