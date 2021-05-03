export interface StripeAccount {
    id: string;
    object: string;
    business_profile: BusinessProfile;
    business_type: string;
    capabilities: Capabilities;
    charges_enabled: boolean;
    company: Company;
    country: string;
    created: number;
    default_currency: string;
    details_submitted: boolean;
    email: string;
    external_accounts: ExternalAccounts;
    individual: Individual;
    metadata: any;
    payouts_enabled: boolean;
    requirements: Requirements2;
    settings: Settings;
    tos_acceptance: TosAcceptance2;
    type: string;
}

interface BusinessProfile {
    mcc: string;
    name: any;
    product_description: string;
    support_address: any;
    support_email: any;
    support_phone: string;
    support_url: any;
    url: string;
}

interface Capabilities {
    card_payments: string;
    transfers: string;
}

interface Company {
    address: Address;
    directors_provided: boolean;
    executives_provided: boolean;
    name: any;
    owners_provided: boolean;
    tax_id_provided: boolean;
    verification: Verification;
}

interface Address {
    city: string;
    country: string;
    line1: string;
    line2: any;
    postal_code: string;
    state: string;
}

interface Verification {
    document: Document;
}

interface Document {
    back: any;
    details: any;
    details_code: any;
    front: any;
}

interface ExternalAccounts {
    object: string;
    data: Daum[];
    has_more: boolean;
    url: string;
}

interface Daum {
    id: string;
    object: string;
    account: string;
    account_holder_name: any;
    account_holder_type: any;
    available_payout_methods: string[];
    bank_name: string;
    country: string;
    currency: string;
    default_for_currency: boolean;
    fingerprint: string;
    last4: string;
    metadata: any;
    routing_number: string;
    status: string;
}

interface Individual {
    id: string;
    object: string;
    account: string;
    address: Address2;
    created: number;
    dob: Dob;
    email: string;
    first_name: string;
    id_number_provided: boolean;
    last_name: string;
    metadata: any;
    relationship: Relationship;
    requirements: Requirements;
    verification: Verification2;
}

interface Address2 {
    city: string;
    country: string;
    line1: string;
    line2: any;
    postal_code: string;
    state: string;
}

interface Dob {
    day: number;
    month: number;
    year: number;
}

interface Relationship {
    director: boolean;
    executive: boolean;
    owner: boolean;
    percent_ownership: any;
    representative: boolean;
    title: any;
}

interface Requirements {
    currently_due: any[];
    errors: any[];
    eventually_due: any[];
    past_due: any[];
    pending_verification: any[];
}

interface Verification2 {
    additional_document: AdditionalDocument;
    details: any;
    details_code: any;
    document: Document2;
    status: string;
}

interface AdditionalDocument {
    back: any;
    details: any;
    details_code: any;
    front: any;
}

interface Document2 {
    back: any;
    details: any;
    details_code: any;
    front: any;
}

interface Requirements2 {
    current_deadline: any;
    currently_due: any[];
    disabled_reason: any;
    errors: any[];
    eventually_due: any[];
    past_due: any[];
    pending_verification: any[];
}

interface Settings {
    bacs_debit_payments: any;
    branding: Branding;
    card_issuing: CardIssuing;
    card_payments: CardPayments;
    dashboard: Dashboard;
    payments: Payments;
    payouts: Payouts;
    sepa_debit_payments: any;
}

interface Branding {
    icon: string;
    logo: string;
    primary_color: string;
    secondary_color: string;
}

interface CardIssuing {
    tos_acceptance: TosAcceptance;
}

interface TosAcceptance {
    date: any;
    ip: any;
}

interface CardPayments {
    decline_on: DeclineOn;
    statement_descriptor_prefix: string;
}

interface DeclineOn {
    avs_failure: boolean;
    cvc_failure: boolean;
}

interface Dashboard {
    display_name: string;
    timezone: string;
}

interface Payments {
    statement_descriptor: string;
    statement_descriptor_kana: any;
    statement_descriptor_kanji: any;
}

interface Payouts {
    debit_negative_balances: boolean;
    schedule: Schedule;
    statement_descriptor: any;
}

interface Schedule {
    delay_days: number;
    interval: string;
}

interface TosAcceptance2 {
    date: number;
    ip: string;
    user_agent: string;
}
