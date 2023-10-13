﻿"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = void 0;
exports.ErrorCode = {
    AddressNotFound: 'BadRequest',
    AnnouncementEmpty: 'BadRequest',
    AnnouncementNotFound: 'BadRequest',
    AnnouncementWrongType: 'BadRequest',
    BadEmail: 'BadRequest',
    BatchAlreadyActive: 'PreconditionFailed',
    BatchHistoryAlreadyManaged: 'Conflict',
    BatchHistoryNotFound: 'BadRequest',
    BatchNotActive: 'ExpectationFailed',
    BatchNotEmpty: 'PreconditionFailed',
    BatchNotFound: 'BadRequest',
    BeatNotFound: 'BadRequest',
    BndEmptyBirth: 'BadRequest',
    BndEmptyBreed: 'BadRequest',
    BndEmptyDate: 'BadRequest',
    BndEmptyGender: 'BadRequest',
    BndEmptyLines: 'BadRequest',
    BndEmptySisbov: 'BadRequest',
    BndUnprocessable: 'BadRequest',
    BreedNotFound: 'BadRequest',
    CannotCreateTruck: 'BadRequest',
    CannotLoadFutureReports: 'IAmATeapot',
    ContactNotFound: 'BadRequest',
    CorralActive: 'ExpectationFailed',
    CorralAlreadyInTransition: 'PreconditionFailed',
    CorralAlreadyManaged: 'Conflict',
    CorralDestinyNotFound: 'BadRequest',
    CorralDoesNotHaveDiet: 'ExpectationFailed',
    CorralDoesNotHaveTractPlan: 'ExpectationFailed',
    CorralNotFound: 'BadRequest',
    CorralOriginNotFound: 'BadRequest',
    CouldNotLoadFarmData: 'InternalServerError',
    DietDoesNotHaveCorrals: 'ExpectationFailed',
    DietHasCorrals: 'ExpectationFailed',
    DietIngredientsMustBeUnique: 'BadRequest',
    DietNotConfinement: 'BadRequest',
    DietNotFound: 'BadRequest',
    DietRequiresEstimatedDailyWeight: 'BadRequest',
    DuplicatedEarrings: 'Conflict',
    EarringCancelled: 'PreconditionFailed',
    EarringNotFound: 'BadRequest',
    EmailAlreadyExists: 'BadRequest',
    EntryManagementNotActive: 'ExpectationFailed',
    EntryManagementNotFound: 'BadRequest',
    EntryManagementNotPending: 'ExpectationFailed',
    EstablishmentNotFound: 'BadRequest',
    ExitManagementNotFound: 'BadRequest',
    FieldsAlreadyInUse: 'BadRequest',
    FinancialItemNotFound: 'BadRequest',
    GtaAgeGroupFull: 'BadRequest',
    GtaFull: 'BadRequest',
    GtaNotFound: 'BadRequest',
    GtaNotFull: 'BadRequest',
    HealthProtocolNotFound: 'BadRequest',
    InclusionEmptySisbov: 'BadRequest',
    InexistentEntity: 'BadRequest',
    IntermediateManagementCannotActive: 'BadRequest',
    IntermediateManagementIsNotPending: 'BadRequest',
    IntermediateManagementNotActive: 'BadRequest',
    IntermediateManagementNotFound: 'NotFound',
    InvalidFarmDate: 'BadRequest',
    InvalidFieldType: 'BadRequest',
    InvalidIngredient: 'BadRequest',
    InvalidLogin: 'Unauthorized',
    InvalidObjectIdType: 'BadRequest',
    InvalidOxAgeForThisGta: 'BadRequest',
    InvalidPercentage: 'BadRequest',
    InvalidPercentageSum: 'BadRequest',
    InvalidReentry: 'UnprocessableEntity',
    InvalidRelation: 'BadRequest',
    InvalidSisbov: 'BadRequest',
    InvalidSisbovRange: 'BadRequest',
    InvalidToken: 'Forbidden',
    LastTreatNotRealized: 'Conflict',
    LineNotFound: 'BadRequest',
    ManagementNotFinished: 'ExpectationFailed',
    MedicineIsUsed: 'BadRequest',
    MedicineNotFound: 'BadRequest',
    NightlyReadAlreadyDone: 'Conflict',
    OccurrenceNotFound: 'BadRequest',
    OnlyConfinementDietHaveCategories: 'BadRequest',
    OxAlreadyBoarded: 'BadRequest',
    OxBlocked: 'BadRequest',
    OxDied: 'BadRequest',
    OxDifferentOwner: 'Conflict',
    OxNotFound: 'BadRequest',
    OxenMissing: 'ExpectationFailed',
    PremixDietIsUsed: 'ExpectationFailed',
    PremixStockCannotChangeNmFactor: 'BadRequest',
    ProtocolIsUsed: 'BadRequest',
    PurchaseAlreadyReceived: 'ExpectationFailed',
    PurchaseNotAnimals: 'ExpectationFailed',
    PurchaseNotEarring: 'ExpectationFailed',
    PurchaseNotFood: 'ExpectationFailed',
    PurchaseNotFound: 'BadRequest',
    PurchaseNotPending: 'ExpectationFailed',
    PurchaseNotReceived: 'ExpectationFailed',
    SetupInfoNotFound: 'BadRequest',
    SisbovDifferentCountry: 'BadRequest',
    SisbovDifferentUf: 'BadRequest',
    SisbovRangeTooBig: 'BadRequest',
    StartDateAfterEndDate: 'BadRequest',
    StockNotFound: 'BadRequest',
    StructureNotFound: 'BadRequest',
    TagNotFound: 'BadRequest',
    TractPlanNotFound: 'BadRequest',
    TransferInsufficientOxen: 'BadRequest',
    TransitionNotFound: 'BadRequest',
    TreatOrderAlreadyDone: 'Conflict',
    TreatOrderDoesNotExist: 'BadRequest',
    TruckAlreadyEmitted: 'BadRequest',
    TruckAlreadySold: 'BadRequest',
    TruckDifferentOwner: 'BadRequest',
    TruckIsFull: 'BadRequest',
    TruckNotEmitted: 'BadRequest',
    TruckNotFound: 'BadRequest',
    TruckNotPending: 'BadRequest',
    TruckNotWaitingForEmission: 'BadRequest',
    TruckWithoutDestiny: 'BadRequest',
    UnhandledError: 'InternalServerError',
    UnhandledPrismaError: 'InternalServerError',
    UnknownError: 'BadRequest',
    UserBelongsToAnotherFarm: 'Forbidden',
    UserNotFound: 'BadRequest',
    UserWithoutPermission: 'Forbidden',
    YesterdayCorralHistoryDoesNotExists: 'ExpectationFailed'
};
//# sourceMappingURL=enum.js.map