const allList= []

   async function getCompany (arr){
   await arr.forEach((company,index)=>{
        const newItem= {}
        newItem.name=company[0]
        newItem.type=company[1] || null
        newItem.url=company[2] || null
        newItem.parentCategorySlug=company[3] || null
        newItem.subcategory=company[4] || null
        newItem.logo=company[5] || null
        newItem.description=company[6] || null
        newItem.crunchbase=company[7] || null
        newItem.linkedin=company[8] || null
        newItem.twitter=company[9] || null
        newItem.yearFounded=company[10] || null
        newItem.numberOfFounders=company[11] || null
        newItem.founderNames=company[12] || null
        newItem.headquartersCountry=company[13] || null
        newItem.headquartersCity=company[14] || null
        newItem.diversitySpotlight=company[15] || null
        newItem.womanInManagement=company[16] || null
        newItem.nonWhitePeopleInManagement=company[17] || null
        newItem.headcount=company[18] || null
        newItem.numberOfPositionsVacantInPastYear=company[19] || null
        newItem.estimatedRevenueRange=company[20] || null
        newItem.knownIndustriesWorkingIn=company[21] || null
        newItem.numbersOfCustomers=company[22] || null
        newItem.namesOfActualCustomersAsPerWebsite=company[23] || null
        newItem.urlOfContentAdressingFinancialServices=company[24] || null
        newItem.urlOfContentAdressingHealthSector=company[25] || null
        newItem.urlOfContentAdressingGovernment=company[26] || null
        newItem.urlOfContentAdressingSustainability=company[27] || null
        newItem.totalNumberOfNewProducFeaturesInLastYear=company[28] || null
        newItem.totalProductsActive=company[29] || null
        newItem.patentsGranted=company[30] || null
        newItem.acquisitions=company[31] || null
        newItem.securityIssues=company[32] || null
        newItem.privacySpecificFeaturesIncluded=company[33] || null
        newItem.privacyBreaches=company[34] || null
        newItem.knownPartnerships=company[35] || null
        newItem.avergaeNumberOfBlogsPerQuarter=company[36] || null
        newItem.monthlyWebsiteVisits=company[37] || null
        newItem.monthlyWebsiteVisitsGrowth=company[38] || null
        newItem.participationInApidays=company[39] || null
        newItem.activeTechCount=company[40] || null
        newItem.itSpend=company[41] || null
        newItem.totalFunding=company[42] || null
        newItem.lastFundingDate=company[43] || null
        newItem.top5Investors=company[44] || null
        newItem.numberLeadOfInvestors=company[45] || null
        newItem.acquiredBy=company[46] || null
        newItem.acquisitionPrice=company[47] || null
        newItem.acquisitionType=company[48] || null
        newItem.ipoDate=company[49] || null
        newItem.moneyRaisedAtIpo=company[50] || null
        newItem.valuationAtIpo=company[51] || null
        allList.push(newItem)
      })
    }

    getCompany(data.values)