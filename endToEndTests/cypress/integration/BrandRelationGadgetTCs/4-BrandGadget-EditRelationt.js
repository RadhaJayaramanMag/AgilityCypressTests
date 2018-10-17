const loginUtils = require('../../utils/loginUtils');
const changeDropdownUtils = require('../../utils/changeDropdownUtils');
const anyGadgetUtils = require('../../utils/anyGadgetUtils');
const browserGadgetUtils = require('../../utils/browserGadgetUtils');

describe('Brand Relation Gadgets-Edit Relation-',function(){
    const multiInstance = '#idx_1190';
    
    const objectId = '#erd-object-id';
    it('TC30-Click on any Brand relation attribute to display Edit-relation attribute window',function(){
        
        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        browserGadgetUtils.setStructureType('!0EggVendorParent');
        cy.get(multiInstance).click();
    
        loginUtils.logoutFromAMI();
        cy.wait(100);
       });
       it('TC31-without entring any data in the fields, Cancel button is enabled',function(){
   
        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        browserGadgetUtils.setStructureType('!0EggVendorParent'); 
        cy.get(multiInstance).click();
        cy.get('#ws-dialog-cancel').should('be.visible');
    
        loginUtils.logoutFromAMI();
        cy.wait(100);
       });
       it('TC32-Enter the characters in Object-id field and clik on Add button, then appropriate error message should display as invalid data',function(){
        
        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        browserGadgetUtils.setStructureType('!0EggVendorParent');
        cy.get('#idx_795').click();
        cy.get(objectId).type('AHYS');
        cy.get('#erd-btn-add').should('be.disabled');
    
         loginUtils.logoutFromAMI();
         cy.wait(100);
       });
       it('TC33-Enter the text in Object-id field and clik on Add button',function(){
        
        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        browserGadgetUtils.setStructureType('!0EggVendorParent');
        cy.get(multiInstance).click();
        cy.get('#arrow-erd_135').click();
        cy.get('#erd_135-1358').should('contain','Altro').dblclick().type('{ctrl}+c')
       
    
        loginUtils.logoutFromAMI();
        cy.wait(100);
    });
       it('TC34-Enter the space in Object-id field and clik on Add button',function(){
        
        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        browserGadgetUtils.setStructureType('!0EggVendorParent');
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        cy.get('#idx_795').click();
        cy.get(objectId).type(' ');
       cy.get('#erd-btn-add').should('be.disabled');
    
         loginUtils.logoutFromAMI();
         cy.wait(100);
       });
    it('TC35-Enter object-id then object-name is disabled',function(){
 
        loginUtils.loginToAMI('cypress1');
        
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        browserGadgetUtils.setStructureType('!0EggVendorParent');   
        cy.get(multiInstance).click();
        cy.get(objectId).type('1333');
        cy.get("#erd-object-name").should('be.disabled');
      
        loginUtils.logoutFromAMI();
        cy.wait(100);
      });
      it('TC36-Enter object-name (alphanumric) then object-id is disabled',function(){
        
        loginUtils.loginToAMI('cypress1');
        
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        anyGadgetUtils.openGadgetOrGroup('Brand Relations'); 
        browserGadgetUtils.setStructureType('!0EggVendorParent');
        cy.get(multiInstance).click();   
        cy.get("#erd-object-name").type('Intro-Estonian');
        cy.get(objectId).should('be.disabled');
      
        loginUtils.logoutFromAMI();
  });
  it('TC37-Enter object-name (character) then object-id is disabled',function(){
    loginUtils.loginToAMI('cypress1');
    
    changeDropdownUtils.changeWorkspace('QA Relations With Browse');
    anyGadgetUtils.openGadgetOrGroup('Browse');
    browserGadgetUtils.setStructureType('Brands');
    browserGadgetUtils.setBrowseContext('Cypress', false);
    anyGadgetUtils.openGadgetOrGroup('Brand Relations'); 
    browserGadgetUtils.setStructureType('!0EggVendorParent');
    cy.get(multiInstance).click();   
    cy.get("#erd-object-name").type('Intro-Estonian');
    cy.get("#erd-btn-add").should('be.enabled');
  
    loginUtils.logoutFromAMI();
    cy.wait(100);
  });
  it('TC38-Enter invalid object-name then displaying appropriate error',function(){
      
          loginUtils.loginToAMI('cypress1');
          
          changeDropdownUtils.changeWorkspace('QA Relations With Browse');
          anyGadgetUtils.openGadgetOrGroup('Browse');
          browserGadgetUtils.setStructureType('Brands');
          browserGadgetUtils.setBrowseContext('Cypress', false);
          anyGadgetUtils.openGadgetOrGroup('Brand Relations'); 
          browserGadgetUtils.setStructureType('!0EggVendorParent');       
          cy.get(multiInstance).click(); 
          cy.get("#erd-object-name").type('Intro');
          cy.get("#erd-btn-add").should('be.enabled');
        
          loginUtils.logoutFromAMI();
          cy.wait(100);
     });
     it('TC39-enter valid object-name, click on Add button to add in the Related objects area',function(){
        
              loginUtils.loginToAMI('cypress1');
              
              changeDropdownUtils.changeWorkspace('QA Relations With Browse');
              anyGadgetUtils.openGadgetOrGroup('Browse');
              browserGadgetUtils.setStructureType('Brands');
              browserGadgetUtils.setBrowseContext('Cypress', false);
              anyGadgetUtils.openGadgetOrGroup('Brand Relations');    
              browserGadgetUtils.setStructureType('!0EggVendorParent');
              cy.get(multiInstance).click();
              cy.get("#erd-object-name").type('Altro');
              cy.get('#erd-btn-add').click();
            
             loginUtils.logoutFromAMI();
             cy.wait(100);
        });
     it('TC40-Enter valid object-Id, click on Add button',function(){

                  loginUtils.loginToAMI('cypress1');
                  
                  changeDropdownUtils.changeWorkspace('QA Relations With Browse');
                  anyGadgetUtils.openGadgetOrGroup('Browse');
                  browserGadgetUtils.setStructureType('Brands');
                  browserGadgetUtils.setBrowseContext('Cypress', false);
                  anyGadgetUtils.openGadgetOrGroup('Brand Relations');    
                  browserGadgetUtils.setStructureType('!0EggVendorParent');
                  cy.get(multiInstance).click();
                  cy.get("#erd-object-name").type('1358');
                  cy.get('#erd-btn-add').click();
                
                 loginUtils.logoutFromAMI();
     });
});   