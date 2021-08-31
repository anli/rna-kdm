export type Maybe<T> = T | null;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  {[SubKey in K]?: Maybe<T[SubKey]>};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  {[SubKey in K]: Maybe<T[SubKey]>};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

export type Ai = Node & {
  __typename?: 'Ai';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Ai>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  monster?: Maybe<Monster>;
  image: Asset;
  monsterLevel?: Maybe<MonsterLevel>;
  type: AiType;
  rank: AiRank;
  /** List of Ai versions */
  history: Array<Version>;
};

export type AiDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type AiCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type AiUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type AiPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type AiMonsterArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type AiImageArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type AiMonsterLevelArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type AiHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type AiConnectInput = {
  /** Document to connect */
  where: AiWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type AiConnection = {
  __typename?: 'AiConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AiEdge>;
  aggregate: Aggregate;
};

export type AiCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  monster?: Maybe<MonsterCreateOneInlineInput>;
  image: AssetCreateOneInlineInput;
  monsterLevel?: Maybe<MonsterLevelCreateOneInlineInput>;
  type: AiType;
  rank: AiRank;
};

export type AiCreateManyInlineInput = {
  /** Create and connect multiple existing Ai documents */
  create?: Maybe<Array<AiCreateInput>>;
  /** Connect multiple existing Ai documents */
  connect?: Maybe<Array<AiWhereUniqueInput>>;
};

export type AiCreateOneInlineInput = {
  /** Create and connect one Ai document */
  create?: Maybe<AiCreateInput>;
  /** Connect one existing Ai document */
  connect?: Maybe<AiWhereUniqueInput>;
};

/** An edge in a connection. */
export type AiEdge = {
  __typename?: 'AiEdge';
  /** The item at the end of the edge. */
  node: Ai;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type AiManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AiWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AiWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AiWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  monster?: Maybe<MonsterWhereInput>;
  image?: Maybe<AssetWhereInput>;
  monsterLevel?: Maybe<MonsterLevelWhereInput>;
  type?: Maybe<AiType>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<AiType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<AiType>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<AiType>>;
  rank?: Maybe<AiRank>;
  /** All values that are not equal to given value. */
  rank_not?: Maybe<AiRank>;
  /** All values that are contained in given list. */
  rank_in?: Maybe<Array<AiRank>>;
  /** All values that are not contained in given list. */
  rank_not_in?: Maybe<Array<AiRank>>;
};

export enum AiOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  RankAsc = 'rank_ASC',
  RankDesc = 'rank_DESC',
}

export enum AiRank {
  Basic = 'basic',
  Advanced = 'advanced',
  Legendary = 'legendary',
}

export enum AiType {
  Mood = 'mood',
  None = 'none',
}

export type AiUpdateInput = {
  name?: Maybe<Scalars['String']>;
  monster?: Maybe<MonsterUpdateOneInlineInput>;
  image?: Maybe<AssetUpdateOneInlineInput>;
  monsterLevel?: Maybe<MonsterLevelUpdateOneInlineInput>;
  type?: Maybe<AiType>;
  rank?: Maybe<AiRank>;
};

export type AiUpdateManyInlineInput = {
  /** Create and connect multiple Ai documents */
  create?: Maybe<Array<AiCreateInput>>;
  /** Connect multiple existing Ai documents */
  connect?: Maybe<Array<AiConnectInput>>;
  /** Override currently-connected documents with multiple existing Ai documents */
  set?: Maybe<Array<AiWhereUniqueInput>>;
  /** Update multiple Ai documents */
  update?: Maybe<Array<AiUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Ai documents */
  upsert?: Maybe<Array<AiUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Ai documents */
  disconnect?: Maybe<Array<AiWhereUniqueInput>>;
  /** Delete multiple Ai documents */
  delete?: Maybe<Array<AiWhereUniqueInput>>;
};

export type AiUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<AiType>;
  rank?: Maybe<AiRank>;
};

export type AiUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AiWhereInput;
  /** Update many input */
  data: AiUpdateManyInput;
};

export type AiUpdateOneInlineInput = {
  /** Create and connect one Ai document */
  create?: Maybe<AiCreateInput>;
  /** Update single Ai document */
  update?: Maybe<AiUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Ai document */
  upsert?: Maybe<AiUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Ai document */
  connect?: Maybe<AiWhereUniqueInput>;
  /** Disconnect currently connected Ai document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Ai document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type AiUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AiWhereUniqueInput;
  /** Document to update */
  data: AiUpdateInput;
};

export type AiUpsertInput = {
  /** Create document if it didn't exist */
  create: AiCreateInput;
  /** Update document if it exists */
  update: AiUpdateInput;
};

export type AiUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AiWhereUniqueInput;
  /** Upsert data */
  data: AiUpsertInput;
};

/** Identifies documents */
export type AiWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AiWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AiWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AiWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  monster?: Maybe<MonsterWhereInput>;
  image?: Maybe<AssetWhereInput>;
  monsterLevel?: Maybe<MonsterLevelWhereInput>;
  type?: Maybe<AiType>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<AiType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<AiType>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<AiType>>;
  rank?: Maybe<AiRank>;
  /** All values that are not equal to given value. */
  rank_not?: Maybe<AiRank>;
  /** All values that are contained in given list. */
  rank_in?: Maybe<Array<AiRank>>;
  /** All values that are not contained in given list. */
  rank_not_in?: Maybe<Array<AiRank>>;
};

/** References Ai record uniquely */
export type AiWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Armor = Node & {
  __typename?: 'Armor';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Armor>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  point: Scalars['Int'];
  effect?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  image?: Maybe<Asset>;
  types: Array<GearType>;
  location: BodyLocation;
  /** List of Armor versions */
  history: Array<Version>;
};

export type ArmorDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type ArmorCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ArmorUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ArmorPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ArmorImageArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ArmorHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ArmorConnectInput = {
  /** Document to connect */
  where: ArmorWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ArmorConnection = {
  __typename?: 'ArmorConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ArmorEdge>;
  aggregate: Aggregate;
};

export type ArmorCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  point: Scalars['Int'];
  effect?: Maybe<Scalars['String']>;
  image?: Maybe<AssetCreateOneInlineInput>;
  types?: Maybe<Array<GearType>>;
  location: BodyLocation;
};

export type ArmorCreateManyInlineInput = {
  /** Create and connect multiple existing Armor documents */
  create?: Maybe<Array<ArmorCreateInput>>;
  /** Connect multiple existing Armor documents */
  connect?: Maybe<Array<ArmorWhereUniqueInput>>;
};

export type ArmorCreateOneInlineInput = {
  /** Create and connect one Armor document */
  create?: Maybe<ArmorCreateInput>;
  /** Connect one existing Armor document */
  connect?: Maybe<ArmorWhereUniqueInput>;
};

/** An edge in a connection. */
export type ArmorEdge = {
  __typename?: 'ArmorEdge';
  /** The item at the end of the edge. */
  node: Armor;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ArmorManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ArmorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ArmorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ArmorWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  point_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  point_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  point_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  point_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  point_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  point_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  point_gte?: Maybe<Scalars['Int']>;
  effect?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  effect_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  effect_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  effect_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  effect_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  effect_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  effect_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  effect_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  effect_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  effect_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  image?: Maybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  types?: Maybe<Array<GearType>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  types_not?: Maybe<Array<GearType>>;
  /** Matches if the field array contains *all* items provided to the filter */
  types_contains_all?: Maybe<Array<GearType>>;
  /** Matches if the field array contains at least one item provided to the filter */
  types_contains_some?: Maybe<Array<GearType>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  types_contains_none?: Maybe<Array<GearType>>;
  location?: Maybe<BodyLocation>;
  /** All values that are not equal to given value. */
  location_not?: Maybe<BodyLocation>;
  /** All values that are contained in given list. */
  location_in?: Maybe<Array<BodyLocation>>;
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<BodyLocation>>;
};

export enum ArmorOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PointAsc = 'point_ASC',
  PointDesc = 'point_DESC',
  EffectAsc = 'effect_ASC',
  EffectDesc = 'effect_DESC',
  TypesAsc = 'types_ASC',
  TypesDesc = 'types_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
}

export type ArmorUpdateInput = {
  name?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['Int']>;
  effect?: Maybe<Scalars['String']>;
  image?: Maybe<AssetUpdateOneInlineInput>;
  types?: Maybe<Array<GearType>>;
  location?: Maybe<BodyLocation>;
};

export type ArmorUpdateManyInlineInput = {
  /** Create and connect multiple Armor documents */
  create?: Maybe<Array<ArmorCreateInput>>;
  /** Connect multiple existing Armor documents */
  connect?: Maybe<Array<ArmorConnectInput>>;
  /** Override currently-connected documents with multiple existing Armor documents */
  set?: Maybe<Array<ArmorWhereUniqueInput>>;
  /** Update multiple Armor documents */
  update?: Maybe<Array<ArmorUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Armor documents */
  upsert?: Maybe<Array<ArmorUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Armor documents */
  disconnect?: Maybe<Array<ArmorWhereUniqueInput>>;
  /** Delete multiple Armor documents */
  delete?: Maybe<Array<ArmorWhereUniqueInput>>;
};

export type ArmorUpdateManyInput = {
  point?: Maybe<Scalars['Int']>;
  effect?: Maybe<Scalars['String']>;
  types?: Maybe<Array<GearType>>;
  location?: Maybe<BodyLocation>;
};

export type ArmorUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ArmorWhereInput;
  /** Update many input */
  data: ArmorUpdateManyInput;
};

export type ArmorUpdateOneInlineInput = {
  /** Create and connect one Armor document */
  create?: Maybe<ArmorCreateInput>;
  /** Update single Armor document */
  update?: Maybe<ArmorUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Armor document */
  upsert?: Maybe<ArmorUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Armor document */
  connect?: Maybe<ArmorWhereUniqueInput>;
  /** Disconnect currently connected Armor document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Armor document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ArmorUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ArmorWhereUniqueInput;
  /** Document to update */
  data: ArmorUpdateInput;
};

export type ArmorUpsertInput = {
  /** Create document if it didn't exist */
  create: ArmorCreateInput;
  /** Update document if it exists */
  update: ArmorUpdateInput;
};

export type ArmorUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ArmorWhereUniqueInput;
  /** Upsert data */
  data: ArmorUpsertInput;
};

/** Identifies documents */
export type ArmorWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ArmorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ArmorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ArmorWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  point_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  point_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  point_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  point_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  point_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  point_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  point_gte?: Maybe<Scalars['Int']>;
  effect?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  effect_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  effect_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  effect_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  effect_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  effect_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  effect_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  effect_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  effect_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  effect_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  image?: Maybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  types?: Maybe<Array<GearType>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  types_not?: Maybe<Array<GearType>>;
  /** Matches if the field array contains *all* items provided to the filter */
  types_contains_all?: Maybe<Array<GearType>>;
  /** Matches if the field array contains at least one item provided to the filter */
  types_contains_some?: Maybe<Array<GearType>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  types_contains_none?: Maybe<Array<GearType>>;
  location?: Maybe<BodyLocation>;
  /** All values that are not equal to given value. */
  location_not?: Maybe<BodyLocation>;
  /** All values that are contained in given list. */
  location_in?: Maybe<Array<BodyLocation>>;
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<BodyLocation>>;
};

/** References Armor record uniquely */
export type ArmorWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  imageArmor: Array<Armor>;
  imageWeapon: Array<Weapon>;
  imageMonster: Array<Monster>;
  actionImageMonster: Array<Monster>;
  imageAi: Array<Ai>;
  imageFightingArt: Array<FightingArt>;
  imageDisorder: Array<Disorder>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};

/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetImageArmorArgs = {
  where?: Maybe<ArmorWhereInput>;
  orderBy?: Maybe<ArmorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetImageWeaponArgs = {
  where?: Maybe<WeaponWhereInput>;
  orderBy?: Maybe<WeaponOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetImageMonsterArgs = {
  where?: Maybe<MonsterWhereInput>;
  orderBy?: Maybe<MonsterOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetActionImageMonsterArgs = {
  where?: Maybe<MonsterWhereInput>;
  orderBy?: Maybe<MonsterOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetImageAiArgs = {
  where?: Maybe<AiWhereInput>;
  orderBy?: Maybe<AiOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetImageFightingArtArgs = {
  where?: Maybe<FightingArtWhereInput>;
  orderBy?: Maybe<FightingArtOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetImageDisorderArgs = {
  where?: Maybe<DisorderWhereInput>;
  orderBy?: Maybe<DisorderOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  imageArmor?: Maybe<ArmorCreateManyInlineInput>;
  imageWeapon?: Maybe<WeaponCreateManyInlineInput>;
  imageMonster?: Maybe<MonsterCreateManyInlineInput>;
  actionImageMonster?: Maybe<MonsterCreateManyInlineInput>;
  imageAi?: Maybe<AiCreateManyInlineInput>;
  imageFightingArt?: Maybe<FightingArtCreateManyInlineInput>;
  imageDisorder?: Maybe<DisorderCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  imageArmor_every?: Maybe<ArmorWhereInput>;
  imageArmor_some?: Maybe<ArmorWhereInput>;
  imageArmor_none?: Maybe<ArmorWhereInput>;
  imageWeapon_every?: Maybe<WeaponWhereInput>;
  imageWeapon_some?: Maybe<WeaponWhereInput>;
  imageWeapon_none?: Maybe<WeaponWhereInput>;
  imageMonster_every?: Maybe<MonsterWhereInput>;
  imageMonster_some?: Maybe<MonsterWhereInput>;
  imageMonster_none?: Maybe<MonsterWhereInput>;
  actionImageMonster_every?: Maybe<MonsterWhereInput>;
  actionImageMonster_some?: Maybe<MonsterWhereInput>;
  actionImageMonster_none?: Maybe<MonsterWhereInput>;
  imageAi_every?: Maybe<AiWhereInput>;
  imageAi_some?: Maybe<AiWhereInput>;
  imageAi_none?: Maybe<AiWhereInput>;
  imageFightingArt_every?: Maybe<FightingArtWhereInput>;
  imageFightingArt_some?: Maybe<FightingArtWhereInput>;
  imageFightingArt_none?: Maybe<FightingArtWhereInput>;
  imageDisorder_every?: Maybe<DisorderWhereInput>;
  imageDisorder_some?: Maybe<DisorderWhereInput>;
  imageDisorder_none?: Maybe<DisorderWhereInput>;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  imageArmor?: Maybe<ArmorUpdateManyInlineInput>;
  imageWeapon?: Maybe<WeaponUpdateManyInlineInput>;
  imageMonster?: Maybe<MonsterUpdateManyInlineInput>;
  actionImageMonster?: Maybe<MonsterUpdateManyInlineInput>;
  imageAi?: Maybe<AiUpdateManyInlineInput>;
  imageFightingArt?: Maybe<FightingArtUpdateManyInlineInput>;
  imageDisorder?: Maybe<DisorderUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  imageArmor_every?: Maybe<ArmorWhereInput>;
  imageArmor_some?: Maybe<ArmorWhereInput>;
  imageArmor_none?: Maybe<ArmorWhereInput>;
  imageWeapon_every?: Maybe<WeaponWhereInput>;
  imageWeapon_some?: Maybe<WeaponWhereInput>;
  imageWeapon_none?: Maybe<WeaponWhereInput>;
  imageMonster_every?: Maybe<MonsterWhereInput>;
  imageMonster_some?: Maybe<MonsterWhereInput>;
  imageMonster_none?: Maybe<MonsterWhereInput>;
  actionImageMonster_every?: Maybe<MonsterWhereInput>;
  actionImageMonster_some?: Maybe<MonsterWhereInput>;
  actionImageMonster_none?: Maybe<MonsterWhereInput>;
  imageAi_every?: Maybe<AiWhereInput>;
  imageAi_some?: Maybe<AiWhereInput>;
  imageAi_none?: Maybe<AiWhereInput>;
  imageFightingArt_every?: Maybe<FightingArtWhereInput>;
  imageFightingArt_some?: Maybe<FightingArtWhereInput>;
  imageFightingArt_none?: Maybe<FightingArtWhereInput>;
  imageDisorder_every?: Maybe<DisorderWhereInput>;
  imageDisorder_some?: Maybe<DisorderWhereInput>;
  imageDisorder_none?: Maybe<DisorderWhereInput>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export enum BodyLocation {
  Waist = 'waist',
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
};

export type Disorder = Node & {
  __typename?: 'Disorder';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Disorder>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  image: Asset;
  /** List of Disorder versions */
  history: Array<Version>;
};

export type DisorderDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type DisorderCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type DisorderUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type DisorderPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type DisorderImageArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type DisorderHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type DisorderConnectInput = {
  /** Document to connect */
  where: DisorderWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type DisorderConnection = {
  __typename?: 'DisorderConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<DisorderEdge>;
  aggregate: Aggregate;
};

export type DisorderCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  image: AssetCreateOneInlineInput;
  cksmz9c38112x01yudkvzgujy?: Maybe<SurvivorCreateManyInlineInput>;
};

export type DisorderCreateManyInlineInput = {
  /** Create and connect multiple existing Disorder documents */
  create?: Maybe<Array<DisorderCreateInput>>;
  /** Connect multiple existing Disorder documents */
  connect?: Maybe<Array<DisorderWhereUniqueInput>>;
};

export type DisorderCreateOneInlineInput = {
  /** Create and connect one Disorder document */
  create?: Maybe<DisorderCreateInput>;
  /** Connect one existing Disorder document */
  connect?: Maybe<DisorderWhereUniqueInput>;
};

/** An edge in a connection. */
export type DisorderEdge = {
  __typename?: 'DisorderEdge';
  /** The item at the end of the edge. */
  node: Disorder;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type DisorderManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<DisorderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<DisorderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<DisorderWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  image?: Maybe<AssetWhereInput>;
};

export enum DisorderOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

export type DisorderUpdateInput = {
  name?: Maybe<Scalars['String']>;
  image?: Maybe<AssetUpdateOneInlineInput>;
  cksmz9c38112x01yudkvzgujy?: Maybe<SurvivorUpdateManyInlineInput>;
};

export type DisorderUpdateManyInlineInput = {
  /** Create and connect multiple Disorder documents */
  create?: Maybe<Array<DisorderCreateInput>>;
  /** Connect multiple existing Disorder documents */
  connect?: Maybe<Array<DisorderConnectInput>>;
  /** Override currently-connected documents with multiple existing Disorder documents */
  set?: Maybe<Array<DisorderWhereUniqueInput>>;
  /** Update multiple Disorder documents */
  update?: Maybe<Array<DisorderUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Disorder documents */
  upsert?: Maybe<Array<DisorderUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Disorder documents */
  disconnect?: Maybe<Array<DisorderWhereUniqueInput>>;
  /** Delete multiple Disorder documents */
  delete?: Maybe<Array<DisorderWhereUniqueInput>>;
};

export type DisorderUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
};

export type DisorderUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: DisorderWhereInput;
  /** Update many input */
  data: DisorderUpdateManyInput;
};

export type DisorderUpdateOneInlineInput = {
  /** Create and connect one Disorder document */
  create?: Maybe<DisorderCreateInput>;
  /** Update single Disorder document */
  update?: Maybe<DisorderUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Disorder document */
  upsert?: Maybe<DisorderUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Disorder document */
  connect?: Maybe<DisorderWhereUniqueInput>;
  /** Disconnect currently connected Disorder document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Disorder document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type DisorderUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: DisorderWhereUniqueInput;
  /** Document to update */
  data: DisorderUpdateInput;
};

export type DisorderUpsertInput = {
  /** Create document if it didn't exist */
  create: DisorderCreateInput;
  /** Update document if it exists */
  update: DisorderUpdateInput;
};

export type DisorderUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: DisorderWhereUniqueInput;
  /** Upsert data */
  data: DisorderUpsertInput;
};

/** Identifies documents */
export type DisorderWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<DisorderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<DisorderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<DisorderWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  image?: Maybe<AssetWhereInput>;
};

/** References Disorder record uniquely */
export type DisorderWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt',
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};

export type FightingArt = Node & {
  __typename?: 'FightingArt';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<FightingArt>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  image: Asset;
  /** List of FightingArt versions */
  history: Array<Version>;
};

export type FightingArtDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type FightingArtCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type FightingArtUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type FightingArtPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type FightingArtImageArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type FightingArtHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type FightingArtConnectInput = {
  /** Document to connect */
  where: FightingArtWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type FightingArtConnection = {
  __typename?: 'FightingArtConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<FightingArtEdge>;
  aggregate: Aggregate;
};

export type FightingArtCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  image: AssetCreateOneInlineInput;
  cksmz8tme0zjj01xnbka86iwx?: Maybe<SurvivorCreateManyInlineInput>;
};

export type FightingArtCreateManyInlineInput = {
  /** Create and connect multiple existing FightingArt documents */
  create?: Maybe<Array<FightingArtCreateInput>>;
  /** Connect multiple existing FightingArt documents */
  connect?: Maybe<Array<FightingArtWhereUniqueInput>>;
};

export type FightingArtCreateOneInlineInput = {
  /** Create and connect one FightingArt document */
  create?: Maybe<FightingArtCreateInput>;
  /** Connect one existing FightingArt document */
  connect?: Maybe<FightingArtWhereUniqueInput>;
};

/** An edge in a connection. */
export type FightingArtEdge = {
  __typename?: 'FightingArtEdge';
  /** The item at the end of the edge. */
  node: FightingArt;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type FightingArtManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FightingArtWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FightingArtWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FightingArtWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  image?: Maybe<AssetWhereInput>;
};

export enum FightingArtOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

export type FightingArtUpdateInput = {
  name?: Maybe<Scalars['String']>;
  image?: Maybe<AssetUpdateOneInlineInput>;
  cksmz8tme0zjj01xnbka86iwx?: Maybe<SurvivorUpdateManyInlineInput>;
};

export type FightingArtUpdateManyInlineInput = {
  /** Create and connect multiple FightingArt documents */
  create?: Maybe<Array<FightingArtCreateInput>>;
  /** Connect multiple existing FightingArt documents */
  connect?: Maybe<Array<FightingArtConnectInput>>;
  /** Override currently-connected documents with multiple existing FightingArt documents */
  set?: Maybe<Array<FightingArtWhereUniqueInput>>;
  /** Update multiple FightingArt documents */
  update?: Maybe<Array<FightingArtUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FightingArt documents */
  upsert?: Maybe<Array<FightingArtUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple FightingArt documents */
  disconnect?: Maybe<Array<FightingArtWhereUniqueInput>>;
  /** Delete multiple FightingArt documents */
  delete?: Maybe<Array<FightingArtWhereUniqueInput>>;
};

export type FightingArtUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
};

export type FightingArtUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: FightingArtWhereInput;
  /** Update many input */
  data: FightingArtUpdateManyInput;
};

export type FightingArtUpdateOneInlineInput = {
  /** Create and connect one FightingArt document */
  create?: Maybe<FightingArtCreateInput>;
  /** Update single FightingArt document */
  update?: Maybe<FightingArtUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FightingArt document */
  upsert?: Maybe<FightingArtUpsertWithNestedWhereUniqueInput>;
  /** Connect existing FightingArt document */
  connect?: Maybe<FightingArtWhereUniqueInput>;
  /** Disconnect currently connected FightingArt document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected FightingArt document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type FightingArtUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FightingArtWhereUniqueInput;
  /** Document to update */
  data: FightingArtUpdateInput;
};

export type FightingArtUpsertInput = {
  /** Create document if it didn't exist */
  create: FightingArtCreateInput;
  /** Update document if it exists */
  update: FightingArtUpdateInput;
};

export type FightingArtUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FightingArtWhereUniqueInput;
  /** Upsert data */
  data: FightingArtUpsertInput;
};

/** Identifies documents */
export type FightingArtWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FightingArtWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FightingArtWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FightingArtWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  image?: Maybe<AssetWhereInput>;
};

/** References FightingArt record uniquely */
export type FightingArtWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum GearType {
  Armor = 'armor',
  Weapon = 'weapon',
  Melee = 'melee',
  Stone = 'stone',
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
  Zh = 'zh',
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Monster = Node & {
  __typename?: 'Monster';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Monster>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  image: Asset;
  actionImage?: Maybe<Asset>;
  ais: Array<Ai>;
  monsterLevels: Array<MonsterLevel>;
  /** List of Monster versions */
  history: Array<Version>;
};

export type MonsterDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type MonsterCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type MonsterUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type MonsterPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type MonsterImageArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type MonsterActionImageArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type MonsterAisArgs = {
  where?: Maybe<AiWhereInput>;
  orderBy?: Maybe<AiOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};

export type MonsterMonsterLevelsArgs = {
  where?: Maybe<MonsterLevelWhereInput>;
  orderBy?: Maybe<MonsterLevelOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};

export type MonsterHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type MonsterConnectInput = {
  /** Document to connect */
  where: MonsterWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type MonsterConnection = {
  __typename?: 'MonsterConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<MonsterEdge>;
  aggregate: Aggregate;
};

export type MonsterCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  image: AssetCreateOneInlineInput;
  actionImage?: Maybe<AssetCreateOneInlineInput>;
  ais?: Maybe<AiCreateManyInlineInput>;
  monsterLevels?: Maybe<MonsterLevelCreateManyInlineInput>;
};

export type MonsterCreateManyInlineInput = {
  /** Create and connect multiple existing Monster documents */
  create?: Maybe<Array<MonsterCreateInput>>;
  /** Connect multiple existing Monster documents */
  connect?: Maybe<Array<MonsterWhereUniqueInput>>;
};

export type MonsterCreateOneInlineInput = {
  /** Create and connect one Monster document */
  create?: Maybe<MonsterCreateInput>;
  /** Connect one existing Monster document */
  connect?: Maybe<MonsterWhereUniqueInput>;
};

/** An edge in a connection. */
export type MonsterEdge = {
  __typename?: 'MonsterEdge';
  /** The item at the end of the edge. */
  node: Monster;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type MonsterLevel = Node & {
  __typename?: 'MonsterLevel';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<MonsterLevel>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  movement: Scalars['Int'];
  toughness: Scalars['Int'];
  speedModifier: Scalars['Int'];
  damageModifier: Scalars['Int'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  ais: Array<Ai>;
  monster?: Maybe<Monster>;
  /** List of MonsterLevel versions */
  history: Array<Version>;
};

export type MonsterLevelDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type MonsterLevelCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type MonsterLevelUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type MonsterLevelPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type MonsterLevelAisArgs = {
  where?: Maybe<AiWhereInput>;
  orderBy?: Maybe<AiOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};

export type MonsterLevelMonsterArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type MonsterLevelHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type MonsterLevelConnectInput = {
  /** Document to connect */
  where: MonsterLevelWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type MonsterLevelConnection = {
  __typename?: 'MonsterLevelConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<MonsterLevelEdge>;
  aggregate: Aggregate;
};

export type MonsterLevelCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  movement: Scalars['Int'];
  toughness: Scalars['Int'];
  speedModifier: Scalars['Int'];
  damageModifier: Scalars['Int'];
  ais?: Maybe<AiCreateManyInlineInput>;
  monster?: Maybe<MonsterCreateOneInlineInput>;
  cksxaz4sa0z9u01xmgtcb3pxe?: Maybe<ShowdownCreateManyInlineInput>;
};

export type MonsterLevelCreateManyInlineInput = {
  /** Create and connect multiple existing MonsterLevel documents */
  create?: Maybe<Array<MonsterLevelCreateInput>>;
  /** Connect multiple existing MonsterLevel documents */
  connect?: Maybe<Array<MonsterLevelWhereUniqueInput>>;
};

export type MonsterLevelCreateOneInlineInput = {
  /** Create and connect one MonsterLevel document */
  create?: Maybe<MonsterLevelCreateInput>;
  /** Connect one existing MonsterLevel document */
  connect?: Maybe<MonsterLevelWhereUniqueInput>;
};

/** An edge in a connection. */
export type MonsterLevelEdge = {
  __typename?: 'MonsterLevelEdge';
  /** The item at the end of the edge. */
  node: MonsterLevel;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type MonsterLevelManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MonsterLevelWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MonsterLevelWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MonsterLevelWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  movement?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  movement_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  movement_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  movement_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  movement_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  movement_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  movement_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  movement_gte?: Maybe<Scalars['Int']>;
  toughness?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  toughness_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  toughness_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  toughness_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  toughness_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  toughness_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  toughness_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  toughness_gte?: Maybe<Scalars['Int']>;
  speedModifier?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  speedModifier_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  speedModifier_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  speedModifier_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  speedModifier_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  speedModifier_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  speedModifier_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  speedModifier_gte?: Maybe<Scalars['Int']>;
  damageModifier?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  damageModifier_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  damageModifier_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  damageModifier_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  damageModifier_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  damageModifier_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  damageModifier_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  damageModifier_gte?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  ais_every?: Maybe<AiWhereInput>;
  ais_some?: Maybe<AiWhereInput>;
  ais_none?: Maybe<AiWhereInput>;
  monster?: Maybe<MonsterWhereInput>;
};

export enum MonsterLevelOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  MovementAsc = 'movement_ASC',
  MovementDesc = 'movement_DESC',
  ToughnessAsc = 'toughness_ASC',
  ToughnessDesc = 'toughness_DESC',
  SpeedModifierAsc = 'speedModifier_ASC',
  SpeedModifierDesc = 'speedModifier_DESC',
  DamageModifierAsc = 'damageModifier_ASC',
  DamageModifierDesc = 'damageModifier_DESC',
}

export type MonsterLevelUpdateInput = {
  name?: Maybe<Scalars['String']>;
  movement?: Maybe<Scalars['Int']>;
  toughness?: Maybe<Scalars['Int']>;
  speedModifier?: Maybe<Scalars['Int']>;
  damageModifier?: Maybe<Scalars['Int']>;
  ais?: Maybe<AiUpdateManyInlineInput>;
  monster?: Maybe<MonsterUpdateOneInlineInput>;
  cksxaz4sa0z9u01xmgtcb3pxe?: Maybe<ShowdownUpdateManyInlineInput>;
};

export type MonsterLevelUpdateManyInlineInput = {
  /** Create and connect multiple MonsterLevel documents */
  create?: Maybe<Array<MonsterLevelCreateInput>>;
  /** Connect multiple existing MonsterLevel documents */
  connect?: Maybe<Array<MonsterLevelConnectInput>>;
  /** Override currently-connected documents with multiple existing MonsterLevel documents */
  set?: Maybe<Array<MonsterLevelWhereUniqueInput>>;
  /** Update multiple MonsterLevel documents */
  update?: Maybe<Array<MonsterLevelUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple MonsterLevel documents */
  upsert?: Maybe<Array<MonsterLevelUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple MonsterLevel documents */
  disconnect?: Maybe<Array<MonsterLevelWhereUniqueInput>>;
  /** Delete multiple MonsterLevel documents */
  delete?: Maybe<Array<MonsterLevelWhereUniqueInput>>;
};

export type MonsterLevelUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  movement?: Maybe<Scalars['Int']>;
  toughness?: Maybe<Scalars['Int']>;
  speedModifier?: Maybe<Scalars['Int']>;
  damageModifier?: Maybe<Scalars['Int']>;
};

export type MonsterLevelUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: MonsterLevelWhereInput;
  /** Update many input */
  data: MonsterLevelUpdateManyInput;
};

export type MonsterLevelUpdateOneInlineInput = {
  /** Create and connect one MonsterLevel document */
  create?: Maybe<MonsterLevelCreateInput>;
  /** Update single MonsterLevel document */
  update?: Maybe<MonsterLevelUpdateWithNestedWhereUniqueInput>;
  /** Upsert single MonsterLevel document */
  upsert?: Maybe<MonsterLevelUpsertWithNestedWhereUniqueInput>;
  /** Connect existing MonsterLevel document */
  connect?: Maybe<MonsterLevelWhereUniqueInput>;
  /** Disconnect currently connected MonsterLevel document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected MonsterLevel document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type MonsterLevelUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: MonsterLevelWhereUniqueInput;
  /** Document to update */
  data: MonsterLevelUpdateInput;
};

export type MonsterLevelUpsertInput = {
  /** Create document if it didn't exist */
  create: MonsterLevelCreateInput;
  /** Update document if it exists */
  update: MonsterLevelUpdateInput;
};

export type MonsterLevelUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: MonsterLevelWhereUniqueInput;
  /** Upsert data */
  data: MonsterLevelUpsertInput;
};

/** Identifies documents */
export type MonsterLevelWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MonsterLevelWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MonsterLevelWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MonsterLevelWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  movement?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  movement_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  movement_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  movement_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  movement_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  movement_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  movement_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  movement_gte?: Maybe<Scalars['Int']>;
  toughness?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  toughness_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  toughness_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  toughness_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  toughness_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  toughness_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  toughness_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  toughness_gte?: Maybe<Scalars['Int']>;
  speedModifier?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  speedModifier_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  speedModifier_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  speedModifier_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  speedModifier_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  speedModifier_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  speedModifier_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  speedModifier_gte?: Maybe<Scalars['Int']>;
  damageModifier?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  damageModifier_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  damageModifier_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  damageModifier_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  damageModifier_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  damageModifier_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  damageModifier_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  damageModifier_gte?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  ais_every?: Maybe<AiWhereInput>;
  ais_some?: Maybe<AiWhereInput>;
  ais_none?: Maybe<AiWhereInput>;
  monster?: Maybe<MonsterWhereInput>;
};

/** References MonsterLevel record uniquely */
export type MonsterLevelWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Identifies documents */
export type MonsterManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MonsterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MonsterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MonsterWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  image?: Maybe<AssetWhereInput>;
  actionImage?: Maybe<AssetWhereInput>;
  ais_every?: Maybe<AiWhereInput>;
  ais_some?: Maybe<AiWhereInput>;
  ais_none?: Maybe<AiWhereInput>;
  monsterLevels_every?: Maybe<MonsterLevelWhereInput>;
  monsterLevels_some?: Maybe<MonsterLevelWhereInput>;
  monsterLevels_none?: Maybe<MonsterLevelWhereInput>;
};

export enum MonsterOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

export type MonsterUpdateInput = {
  name?: Maybe<Scalars['String']>;
  image?: Maybe<AssetUpdateOneInlineInput>;
  actionImage?: Maybe<AssetUpdateOneInlineInput>;
  ais?: Maybe<AiUpdateManyInlineInput>;
  monsterLevels?: Maybe<MonsterLevelUpdateManyInlineInput>;
};

export type MonsterUpdateManyInlineInput = {
  /** Create and connect multiple Monster documents */
  create?: Maybe<Array<MonsterCreateInput>>;
  /** Connect multiple existing Monster documents */
  connect?: Maybe<Array<MonsterConnectInput>>;
  /** Override currently-connected documents with multiple existing Monster documents */
  set?: Maybe<Array<MonsterWhereUniqueInput>>;
  /** Update multiple Monster documents */
  update?: Maybe<Array<MonsterUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Monster documents */
  upsert?: Maybe<Array<MonsterUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Monster documents */
  disconnect?: Maybe<Array<MonsterWhereUniqueInput>>;
  /** Delete multiple Monster documents */
  delete?: Maybe<Array<MonsterWhereUniqueInput>>;
};

export type MonsterUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export type MonsterUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: MonsterWhereInput;
  /** Update many input */
  data: MonsterUpdateManyInput;
};

export type MonsterUpdateOneInlineInput = {
  /** Create and connect one Monster document */
  create?: Maybe<MonsterCreateInput>;
  /** Update single Monster document */
  update?: Maybe<MonsterUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Monster document */
  upsert?: Maybe<MonsterUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Monster document */
  connect?: Maybe<MonsterWhereUniqueInput>;
  /** Disconnect currently connected Monster document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Monster document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type MonsterUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: MonsterWhereUniqueInput;
  /** Document to update */
  data: MonsterUpdateInput;
};

export type MonsterUpsertInput = {
  /** Create document if it didn't exist */
  create: MonsterCreateInput;
  /** Update document if it exists */
  update: MonsterUpdateInput;
};

export type MonsterUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: MonsterWhereUniqueInput;
  /** Upsert data */
  data: MonsterUpsertInput;
};

/** Identifies documents */
export type MonsterWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MonsterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MonsterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MonsterWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  image?: Maybe<AssetWhereInput>;
  actionImage?: Maybe<AssetWhereInput>;
  ais_every?: Maybe<AiWhereInput>;
  ais_some?: Maybe<AiWhereInput>;
  ais_none?: Maybe<AiWhereInput>;
  monsterLevels_every?: Maybe<MonsterLevelWhereInput>;
  monsterLevels_some?: Maybe<MonsterLevelWhereInput>;
  monsterLevels_none?: Maybe<MonsterLevelWhereInput>;
};

/** References Monster record uniquely */
export type MonsterWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one showdown */
  createShowdown?: Maybe<Showdown>;
  /** Update one showdown */
  updateShowdown?: Maybe<Showdown>;
  /** Delete one showdown from _all_ existing stages. Returns deleted document. */
  deleteShowdown?: Maybe<Showdown>;
  /** Upsert one showdown */
  upsertShowdown?: Maybe<Showdown>;
  /** Publish one showdown */
  publishShowdown?: Maybe<Showdown>;
  /** Unpublish one showdown from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishShowdown?: Maybe<Showdown>;
  /** Update many Showdown documents */
  updateManyShowdownsConnection: ShowdownConnection;
  /** Delete many Showdown documents, return deleted documents */
  deleteManyShowdownsConnection: ShowdownConnection;
  /** Publish many Showdown documents */
  publishManyShowdownsConnection: ShowdownConnection;
  /** Find many Showdown documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyShowdownsConnection: ShowdownConnection;
  /**
   * Update many showdowns
   * @deprecated Please use the new paginated many mutation (updateManyShowdownsConnection)
   */
  updateManyShowdowns: BatchPayload;
  /**
   * Delete many Showdown documents
   * @deprecated Please use the new paginated many mutation (deleteManyShowdownsConnection)
   */
  deleteManyShowdowns: BatchPayload;
  /**
   * Publish many Showdown documents
   * @deprecated Please use the new paginated many mutation (publishManyShowdownsConnection)
   */
  publishManyShowdowns: BatchPayload;
  /**
   * Unpublish many Showdown documents
   * @deprecated Please use the new paginated many mutation (unpublishManyShowdownsConnection)
   */
  unpublishManyShowdowns: BatchPayload;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Create one player */
  createPlayer?: Maybe<Player>;
  /** Update one player */
  updatePlayer?: Maybe<Player>;
  /** Delete one player from _all_ existing stages. Returns deleted document. */
  deletePlayer?: Maybe<Player>;
  /** Upsert one player */
  upsertPlayer?: Maybe<Player>;
  /** Publish one player */
  publishPlayer?: Maybe<Player>;
  /** Unpublish one player from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPlayer?: Maybe<Player>;
  /** Update many Player documents */
  updateManyPlayersConnection: PlayerConnection;
  /** Delete many Player documents, return deleted documents */
  deleteManyPlayersConnection: PlayerConnection;
  /** Publish many Player documents */
  publishManyPlayersConnection: PlayerConnection;
  /** Find many Player documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPlayersConnection: PlayerConnection;
  /**
   * Update many players
   * @deprecated Please use the new paginated many mutation (updateManyPlayersConnection)
   */
  updateManyPlayers: BatchPayload;
  /**
   * Delete many Player documents
   * @deprecated Please use the new paginated many mutation (deleteManyPlayersConnection)
   */
  deleteManyPlayers: BatchPayload;
  /**
   * Publish many Player documents
   * @deprecated Please use the new paginated many mutation (publishManyPlayersConnection)
   */
  publishManyPlayers: BatchPayload;
  /**
   * Unpublish many Player documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPlayersConnection)
   */
  unpublishManyPlayers: BatchPayload;
  /** Create one armor */
  createArmor?: Maybe<Armor>;
  /** Update one armor */
  updateArmor?: Maybe<Armor>;
  /** Delete one armor from _all_ existing stages. Returns deleted document. */
  deleteArmor?: Maybe<Armor>;
  /** Upsert one armor */
  upsertArmor?: Maybe<Armor>;
  /** Publish one armor */
  publishArmor?: Maybe<Armor>;
  /** Unpublish one armor from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishArmor?: Maybe<Armor>;
  /** Update many Armor documents */
  updateManyArmorsConnection: ArmorConnection;
  /** Delete many Armor documents, return deleted documents */
  deleteManyArmorsConnection: ArmorConnection;
  /** Publish many Armor documents */
  publishManyArmorsConnection: ArmorConnection;
  /** Find many Armor documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyArmorsConnection: ArmorConnection;
  /**
   * Update many armors
   * @deprecated Please use the new paginated many mutation (updateManyArmorsConnection)
   */
  updateManyArmors: BatchPayload;
  /**
   * Delete many Armor documents
   * @deprecated Please use the new paginated many mutation (deleteManyArmorsConnection)
   */
  deleteManyArmors: BatchPayload;
  /**
   * Publish many Armor documents
   * @deprecated Please use the new paginated many mutation (publishManyArmorsConnection)
   */
  publishManyArmors: BatchPayload;
  /**
   * Unpublish many Armor documents
   * @deprecated Please use the new paginated many mutation (unpublishManyArmorsConnection)
   */
  unpublishManyArmors: BatchPayload;
  /** Create one weapon */
  createWeapon?: Maybe<Weapon>;
  /** Update one weapon */
  updateWeapon?: Maybe<Weapon>;
  /** Delete one weapon from _all_ existing stages. Returns deleted document. */
  deleteWeapon?: Maybe<Weapon>;
  /** Upsert one weapon */
  upsertWeapon?: Maybe<Weapon>;
  /** Publish one weapon */
  publishWeapon?: Maybe<Weapon>;
  /** Unpublish one weapon from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishWeapon?: Maybe<Weapon>;
  /** Update many Weapon documents */
  updateManyWeaponsConnection: WeaponConnection;
  /** Delete many Weapon documents, return deleted documents */
  deleteManyWeaponsConnection: WeaponConnection;
  /** Publish many Weapon documents */
  publishManyWeaponsConnection: WeaponConnection;
  /** Find many Weapon documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyWeaponsConnection: WeaponConnection;
  /**
   * Update many weapons
   * @deprecated Please use the new paginated many mutation (updateManyWeaponsConnection)
   */
  updateManyWeapons: BatchPayload;
  /**
   * Delete many Weapon documents
   * @deprecated Please use the new paginated many mutation (deleteManyWeaponsConnection)
   */
  deleteManyWeapons: BatchPayload;
  /**
   * Publish many Weapon documents
   * @deprecated Please use the new paginated many mutation (publishManyWeaponsConnection)
   */
  publishManyWeapons: BatchPayload;
  /**
   * Unpublish many Weapon documents
   * @deprecated Please use the new paginated many mutation (unpublishManyWeaponsConnection)
   */
  unpublishManyWeapons: BatchPayload;
  /** Create one monster */
  createMonster?: Maybe<Monster>;
  /** Update one monster */
  updateMonster?: Maybe<Monster>;
  /** Delete one monster from _all_ existing stages. Returns deleted document. */
  deleteMonster?: Maybe<Monster>;
  /** Upsert one monster */
  upsertMonster?: Maybe<Monster>;
  /** Publish one monster */
  publishMonster?: Maybe<Monster>;
  /** Unpublish one monster from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishMonster?: Maybe<Monster>;
  /** Update many Monster documents */
  updateManyMonstersConnection: MonsterConnection;
  /** Delete many Monster documents, return deleted documents */
  deleteManyMonstersConnection: MonsterConnection;
  /** Publish many Monster documents */
  publishManyMonstersConnection: MonsterConnection;
  /** Find many Monster documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyMonstersConnection: MonsterConnection;
  /**
   * Update many monsters
   * @deprecated Please use the new paginated many mutation (updateManyMonstersConnection)
   */
  updateManyMonsters: BatchPayload;
  /**
   * Delete many Monster documents
   * @deprecated Please use the new paginated many mutation (deleteManyMonstersConnection)
   */
  deleteManyMonsters: BatchPayload;
  /**
   * Publish many Monster documents
   * @deprecated Please use the new paginated many mutation (publishManyMonstersConnection)
   */
  publishManyMonsters: BatchPayload;
  /**
   * Unpublish many Monster documents
   * @deprecated Please use the new paginated many mutation (unpublishManyMonstersConnection)
   */
  unpublishManyMonsters: BatchPayload;
  /** Create one ai */
  createAi?: Maybe<Ai>;
  /** Update one ai */
  updateAi?: Maybe<Ai>;
  /** Delete one ai from _all_ existing stages. Returns deleted document. */
  deleteAi?: Maybe<Ai>;
  /** Upsert one ai */
  upsertAi?: Maybe<Ai>;
  /** Publish one ai */
  publishAi?: Maybe<Ai>;
  /** Unpublish one ai from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAi?: Maybe<Ai>;
  /** Update many Ai documents */
  updateManyAisConnection: AiConnection;
  /** Delete many Ai documents, return deleted documents */
  deleteManyAisConnection: AiConnection;
  /** Publish many Ai documents */
  publishManyAisConnection: AiConnection;
  /** Find many Ai documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAisConnection: AiConnection;
  /**
   * Update many ais
   * @deprecated Please use the new paginated many mutation (updateManyAisConnection)
   */
  updateManyAis: BatchPayload;
  /**
   * Delete many Ai documents
   * @deprecated Please use the new paginated many mutation (deleteManyAisConnection)
   */
  deleteManyAis: BatchPayload;
  /**
   * Publish many Ai documents
   * @deprecated Please use the new paginated many mutation (publishManyAisConnection)
   */
  publishManyAis: BatchPayload;
  /**
   * Unpublish many Ai documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAisConnection)
   */
  unpublishManyAis: BatchPayload;
  /** Create one monsterLevel */
  createMonsterLevel?: Maybe<MonsterLevel>;
  /** Update one monsterLevel */
  updateMonsterLevel?: Maybe<MonsterLevel>;
  /** Delete one monsterLevel from _all_ existing stages. Returns deleted document. */
  deleteMonsterLevel?: Maybe<MonsterLevel>;
  /** Upsert one monsterLevel */
  upsertMonsterLevel?: Maybe<MonsterLevel>;
  /** Publish one monsterLevel */
  publishMonsterLevel?: Maybe<MonsterLevel>;
  /** Unpublish one monsterLevel from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishMonsterLevel?: Maybe<MonsterLevel>;
  /** Update many MonsterLevel documents */
  updateManyMonsterLevelsConnection: MonsterLevelConnection;
  /** Delete many MonsterLevel documents, return deleted documents */
  deleteManyMonsterLevelsConnection: MonsterLevelConnection;
  /** Publish many MonsterLevel documents */
  publishManyMonsterLevelsConnection: MonsterLevelConnection;
  /** Find many MonsterLevel documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyMonsterLevelsConnection: MonsterLevelConnection;
  /**
   * Update many monsterLevels
   * @deprecated Please use the new paginated many mutation (updateManyMonsterLevelsConnection)
   */
  updateManyMonsterLevels: BatchPayload;
  /**
   * Delete many MonsterLevel documents
   * @deprecated Please use the new paginated many mutation (deleteManyMonsterLevelsConnection)
   */
  deleteManyMonsterLevels: BatchPayload;
  /**
   * Publish many MonsterLevel documents
   * @deprecated Please use the new paginated many mutation (publishManyMonsterLevelsConnection)
   */
  publishManyMonsterLevels: BatchPayload;
  /**
   * Unpublish many MonsterLevel documents
   * @deprecated Please use the new paginated many mutation (unpublishManyMonsterLevelsConnection)
   */
  unpublishManyMonsterLevels: BatchPayload;
  /** Create one survivor */
  createSurvivor?: Maybe<Survivor>;
  /** Update one survivor */
  updateSurvivor?: Maybe<Survivor>;
  /** Delete one survivor from _all_ existing stages. Returns deleted document. */
  deleteSurvivor?: Maybe<Survivor>;
  /** Upsert one survivor */
  upsertSurvivor?: Maybe<Survivor>;
  /** Publish one survivor */
  publishSurvivor?: Maybe<Survivor>;
  /** Unpublish one survivor from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSurvivor?: Maybe<Survivor>;
  /** Update many Survivor documents */
  updateManySurvivorsConnection: SurvivorConnection;
  /** Delete many Survivor documents, return deleted documents */
  deleteManySurvivorsConnection: SurvivorConnection;
  /** Publish many Survivor documents */
  publishManySurvivorsConnection: SurvivorConnection;
  /** Find many Survivor documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySurvivorsConnection: SurvivorConnection;
  /**
   * Update many survivors
   * @deprecated Please use the new paginated many mutation (updateManySurvivorsConnection)
   */
  updateManySurvivors: BatchPayload;
  /**
   * Delete many Survivor documents
   * @deprecated Please use the new paginated many mutation (deleteManySurvivorsConnection)
   */
  deleteManySurvivors: BatchPayload;
  /**
   * Publish many Survivor documents
   * @deprecated Please use the new paginated many mutation (publishManySurvivorsConnection)
   */
  publishManySurvivors: BatchPayload;
  /**
   * Unpublish many Survivor documents
   * @deprecated Please use the new paginated many mutation (unpublishManySurvivorsConnection)
   */
  unpublishManySurvivors: BatchPayload;
  /** Create one weaponProficiencyType */
  createWeaponProficiencyType?: Maybe<WeaponProficiencyType>;
  /** Update one weaponProficiencyType */
  updateWeaponProficiencyType?: Maybe<WeaponProficiencyType>;
  /** Delete one weaponProficiencyType from _all_ existing stages. Returns deleted document. */
  deleteWeaponProficiencyType?: Maybe<WeaponProficiencyType>;
  /** Upsert one weaponProficiencyType */
  upsertWeaponProficiencyType?: Maybe<WeaponProficiencyType>;
  /** Publish one weaponProficiencyType */
  publishWeaponProficiencyType?: Maybe<WeaponProficiencyType>;
  /** Unpublish one weaponProficiencyType from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishWeaponProficiencyType?: Maybe<WeaponProficiencyType>;
  /** Update many WeaponProficiencyType documents */
  updateManyWeaponProficiencyTypesConnection: WeaponProficiencyTypeConnection;
  /** Delete many WeaponProficiencyType documents, return deleted documents */
  deleteManyWeaponProficiencyTypesConnection: WeaponProficiencyTypeConnection;
  /** Publish many WeaponProficiencyType documents */
  publishManyWeaponProficiencyTypesConnection: WeaponProficiencyTypeConnection;
  /** Find many WeaponProficiencyType documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyWeaponProficiencyTypesConnection: WeaponProficiencyTypeConnection;
  /**
   * Update many weaponProficiencyTypes
   * @deprecated Please use the new paginated many mutation (updateManyWeaponProficiencyTypesConnection)
   */
  updateManyWeaponProficiencyTypes: BatchPayload;
  /**
   * Delete many WeaponProficiencyType documents
   * @deprecated Please use the new paginated many mutation (deleteManyWeaponProficiencyTypesConnection)
   */
  deleteManyWeaponProficiencyTypes: BatchPayload;
  /**
   * Publish many WeaponProficiencyType documents
   * @deprecated Please use the new paginated many mutation (publishManyWeaponProficiencyTypesConnection)
   */
  publishManyWeaponProficiencyTypes: BatchPayload;
  /**
   * Unpublish many WeaponProficiencyType documents
   * @deprecated Please use the new paginated many mutation (unpublishManyWeaponProficiencyTypesConnection)
   */
  unpublishManyWeaponProficiencyTypes: BatchPayload;
  /** Create one fightingArt */
  createFightingArt?: Maybe<FightingArt>;
  /** Update one fightingArt */
  updateFightingArt?: Maybe<FightingArt>;
  /** Delete one fightingArt from _all_ existing stages. Returns deleted document. */
  deleteFightingArt?: Maybe<FightingArt>;
  /** Upsert one fightingArt */
  upsertFightingArt?: Maybe<FightingArt>;
  /** Publish one fightingArt */
  publishFightingArt?: Maybe<FightingArt>;
  /** Unpublish one fightingArt from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFightingArt?: Maybe<FightingArt>;
  /** Update many FightingArt documents */
  updateManyFightingArtsConnection: FightingArtConnection;
  /** Delete many FightingArt documents, return deleted documents */
  deleteManyFightingArtsConnection: FightingArtConnection;
  /** Publish many FightingArt documents */
  publishManyFightingArtsConnection: FightingArtConnection;
  /** Find many FightingArt documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFightingArtsConnection: FightingArtConnection;
  /**
   * Update many fightingArts
   * @deprecated Please use the new paginated many mutation (updateManyFightingArtsConnection)
   */
  updateManyFightingArts: BatchPayload;
  /**
   * Delete many FightingArt documents
   * @deprecated Please use the new paginated many mutation (deleteManyFightingArtsConnection)
   */
  deleteManyFightingArts: BatchPayload;
  /**
   * Publish many FightingArt documents
   * @deprecated Please use the new paginated many mutation (publishManyFightingArtsConnection)
   */
  publishManyFightingArts: BatchPayload;
  /**
   * Unpublish many FightingArt documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFightingArtsConnection)
   */
  unpublishManyFightingArts: BatchPayload;
  /** Create one disorder */
  createDisorder?: Maybe<Disorder>;
  /** Update one disorder */
  updateDisorder?: Maybe<Disorder>;
  /** Delete one disorder from _all_ existing stages. Returns deleted document. */
  deleteDisorder?: Maybe<Disorder>;
  /** Upsert one disorder */
  upsertDisorder?: Maybe<Disorder>;
  /** Publish one disorder */
  publishDisorder?: Maybe<Disorder>;
  /** Unpublish one disorder from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishDisorder?: Maybe<Disorder>;
  /** Update many Disorder documents */
  updateManyDisordersConnection: DisorderConnection;
  /** Delete many Disorder documents, return deleted documents */
  deleteManyDisordersConnection: DisorderConnection;
  /** Publish many Disorder documents */
  publishManyDisordersConnection: DisorderConnection;
  /** Find many Disorder documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyDisordersConnection: DisorderConnection;
  /**
   * Update many disorders
   * @deprecated Please use the new paginated many mutation (updateManyDisordersConnection)
   */
  updateManyDisorders: BatchPayload;
  /**
   * Delete many Disorder documents
   * @deprecated Please use the new paginated many mutation (deleteManyDisordersConnection)
   */
  deleteManyDisorders: BatchPayload;
  /**
   * Publish many Disorder documents
   * @deprecated Please use the new paginated many mutation (publishManyDisordersConnection)
   */
  publishManyDisorders: BatchPayload;
  /**
   * Unpublish many Disorder documents
   * @deprecated Please use the new paginated many mutation (unpublishManyDisordersConnection)
   */
  unpublishManyDisorders: BatchPayload;
  /** Create one settlement */
  createSettlement?: Maybe<Settlement>;
  /** Update one settlement */
  updateSettlement?: Maybe<Settlement>;
  /** Delete one settlement from _all_ existing stages. Returns deleted document. */
  deleteSettlement?: Maybe<Settlement>;
  /** Upsert one settlement */
  upsertSettlement?: Maybe<Settlement>;
  /** Publish one settlement */
  publishSettlement?: Maybe<Settlement>;
  /** Unpublish one settlement from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSettlement?: Maybe<Settlement>;
  /** Update many Settlement documents */
  updateManySettlementsConnection: SettlementConnection;
  /** Delete many Settlement documents, return deleted documents */
  deleteManySettlementsConnection: SettlementConnection;
  /** Publish many Settlement documents */
  publishManySettlementsConnection: SettlementConnection;
  /** Find many Settlement documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySettlementsConnection: SettlementConnection;
  /**
   * Update many settlements
   * @deprecated Please use the new paginated many mutation (updateManySettlementsConnection)
   */
  updateManySettlements: BatchPayload;
  /**
   * Delete many Settlement documents
   * @deprecated Please use the new paginated many mutation (deleteManySettlementsConnection)
   */
  deleteManySettlements: BatchPayload;
  /**
   * Publish many Settlement documents
   * @deprecated Please use the new paginated many mutation (publishManySettlementsConnection)
   */
  publishManySettlements: BatchPayload;
  /**
   * Unpublish many Settlement documents
   * @deprecated Please use the new paginated many mutation (unpublishManySettlementsConnection)
   */
  unpublishManySettlements: BatchPayload;
};

export type MutationCreateShowdownArgs = {
  data: ShowdownCreateInput;
};

export type MutationUpdateShowdownArgs = {
  where: ShowdownWhereUniqueInput;
  data: ShowdownUpdateInput;
};

export type MutationDeleteShowdownArgs = {
  where: ShowdownWhereUniqueInput;
};

export type MutationUpsertShowdownArgs = {
  where: ShowdownWhereUniqueInput;
  upsert: ShowdownUpsertInput;
};

export type MutationPublishShowdownArgs = {
  where: ShowdownWhereUniqueInput;
  to?: Array<Stage>;
};

export type MutationUnpublishShowdownArgs = {
  where: ShowdownWhereUniqueInput;
  from?: Array<Stage>;
};

export type MutationUpdateManyShowdownsConnectionArgs = {
  where?: Maybe<ShowdownManyWhereInput>;
  data: ShowdownUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationDeleteManyShowdownsConnectionArgs = {
  where?: Maybe<ShowdownManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationPublishManyShowdownsConnectionArgs = {
  where?: Maybe<ShowdownManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUnpublishManyShowdownsConnectionArgs = {
  where?: Maybe<ShowdownManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUpdateManyShowdownsArgs = {
  where?: Maybe<ShowdownManyWhereInput>;
  data: ShowdownUpdateManyInput;
};

export type MutationDeleteManyShowdownsArgs = {
  where?: Maybe<ShowdownManyWhereInput>;
};

export type MutationPublishManyShowdownsArgs = {
  where?: Maybe<ShowdownManyWhereInput>;
  to?: Array<Stage>;
};

export type MutationUnpublishManyShowdownsArgs = {
  where?: Maybe<ShowdownManyWhereInput>;
  from?: Array<Stage>;
};

export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};

export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};

export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};

export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};

export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};

export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};

export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};

export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};

export type MutationCreatePlayerArgs = {
  data: PlayerCreateInput;
};

export type MutationUpdatePlayerArgs = {
  where: PlayerWhereUniqueInput;
  data: PlayerUpdateInput;
};

export type MutationDeletePlayerArgs = {
  where: PlayerWhereUniqueInput;
};

export type MutationUpsertPlayerArgs = {
  where: PlayerWhereUniqueInput;
  upsert: PlayerUpsertInput;
};

export type MutationPublishPlayerArgs = {
  where: PlayerWhereUniqueInput;
  to?: Array<Stage>;
};

export type MutationUnpublishPlayerArgs = {
  where: PlayerWhereUniqueInput;
  from?: Array<Stage>;
};

export type MutationUpdateManyPlayersConnectionArgs = {
  where?: Maybe<PlayerManyWhereInput>;
  data: PlayerUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationDeleteManyPlayersConnectionArgs = {
  where?: Maybe<PlayerManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationPublishManyPlayersConnectionArgs = {
  where?: Maybe<PlayerManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUnpublishManyPlayersConnectionArgs = {
  where?: Maybe<PlayerManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUpdateManyPlayersArgs = {
  where?: Maybe<PlayerManyWhereInput>;
  data: PlayerUpdateManyInput;
};

export type MutationDeleteManyPlayersArgs = {
  where?: Maybe<PlayerManyWhereInput>;
};

export type MutationPublishManyPlayersArgs = {
  where?: Maybe<PlayerManyWhereInput>;
  to?: Array<Stage>;
};

export type MutationUnpublishManyPlayersArgs = {
  where?: Maybe<PlayerManyWhereInput>;
  from?: Array<Stage>;
};

export type MutationCreateArmorArgs = {
  data: ArmorCreateInput;
};

export type MutationUpdateArmorArgs = {
  where: ArmorWhereUniqueInput;
  data: ArmorUpdateInput;
};

export type MutationDeleteArmorArgs = {
  where: ArmorWhereUniqueInput;
};

export type MutationUpsertArmorArgs = {
  where: ArmorWhereUniqueInput;
  upsert: ArmorUpsertInput;
};

export type MutationPublishArmorArgs = {
  where: ArmorWhereUniqueInput;
  to?: Array<Stage>;
};

export type MutationUnpublishArmorArgs = {
  where: ArmorWhereUniqueInput;
  from?: Array<Stage>;
};

export type MutationUpdateManyArmorsConnectionArgs = {
  where?: Maybe<ArmorManyWhereInput>;
  data: ArmorUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationDeleteManyArmorsConnectionArgs = {
  where?: Maybe<ArmorManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationPublishManyArmorsConnectionArgs = {
  where?: Maybe<ArmorManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUnpublishManyArmorsConnectionArgs = {
  where?: Maybe<ArmorManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUpdateManyArmorsArgs = {
  where?: Maybe<ArmorManyWhereInput>;
  data: ArmorUpdateManyInput;
};

export type MutationDeleteManyArmorsArgs = {
  where?: Maybe<ArmorManyWhereInput>;
};

export type MutationPublishManyArmorsArgs = {
  where?: Maybe<ArmorManyWhereInput>;
  to?: Array<Stage>;
};

export type MutationUnpublishManyArmorsArgs = {
  where?: Maybe<ArmorManyWhereInput>;
  from?: Array<Stage>;
};

export type MutationCreateWeaponArgs = {
  data: WeaponCreateInput;
};

export type MutationUpdateWeaponArgs = {
  where: WeaponWhereUniqueInput;
  data: WeaponUpdateInput;
};

export type MutationDeleteWeaponArgs = {
  where: WeaponWhereUniqueInput;
};

export type MutationUpsertWeaponArgs = {
  where: WeaponWhereUniqueInput;
  upsert: WeaponUpsertInput;
};

export type MutationPublishWeaponArgs = {
  where: WeaponWhereUniqueInput;
  to?: Array<Stage>;
};

export type MutationUnpublishWeaponArgs = {
  where: WeaponWhereUniqueInput;
  from?: Array<Stage>;
};

export type MutationUpdateManyWeaponsConnectionArgs = {
  where?: Maybe<WeaponManyWhereInput>;
  data: WeaponUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationDeleteManyWeaponsConnectionArgs = {
  where?: Maybe<WeaponManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationPublishManyWeaponsConnectionArgs = {
  where?: Maybe<WeaponManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUnpublishManyWeaponsConnectionArgs = {
  where?: Maybe<WeaponManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUpdateManyWeaponsArgs = {
  where?: Maybe<WeaponManyWhereInput>;
  data: WeaponUpdateManyInput;
};

export type MutationDeleteManyWeaponsArgs = {
  where?: Maybe<WeaponManyWhereInput>;
};

export type MutationPublishManyWeaponsArgs = {
  where?: Maybe<WeaponManyWhereInput>;
  to?: Array<Stage>;
};

export type MutationUnpublishManyWeaponsArgs = {
  where?: Maybe<WeaponManyWhereInput>;
  from?: Array<Stage>;
};

export type MutationCreateMonsterArgs = {
  data: MonsterCreateInput;
};

export type MutationUpdateMonsterArgs = {
  where: MonsterWhereUniqueInput;
  data: MonsterUpdateInput;
};

export type MutationDeleteMonsterArgs = {
  where: MonsterWhereUniqueInput;
};

export type MutationUpsertMonsterArgs = {
  where: MonsterWhereUniqueInput;
  upsert: MonsterUpsertInput;
};

export type MutationPublishMonsterArgs = {
  where: MonsterWhereUniqueInput;
  to?: Array<Stage>;
};

export type MutationUnpublishMonsterArgs = {
  where: MonsterWhereUniqueInput;
  from?: Array<Stage>;
};

export type MutationUpdateManyMonstersConnectionArgs = {
  where?: Maybe<MonsterManyWhereInput>;
  data: MonsterUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationDeleteManyMonstersConnectionArgs = {
  where?: Maybe<MonsterManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationPublishManyMonstersConnectionArgs = {
  where?: Maybe<MonsterManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUnpublishManyMonstersConnectionArgs = {
  where?: Maybe<MonsterManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUpdateManyMonstersArgs = {
  where?: Maybe<MonsterManyWhereInput>;
  data: MonsterUpdateManyInput;
};

export type MutationDeleteManyMonstersArgs = {
  where?: Maybe<MonsterManyWhereInput>;
};

export type MutationPublishManyMonstersArgs = {
  where?: Maybe<MonsterManyWhereInput>;
  to?: Array<Stage>;
};

export type MutationUnpublishManyMonstersArgs = {
  where?: Maybe<MonsterManyWhereInput>;
  from?: Array<Stage>;
};

export type MutationCreateAiArgs = {
  data: AiCreateInput;
};

export type MutationUpdateAiArgs = {
  where: AiWhereUniqueInput;
  data: AiUpdateInput;
};

export type MutationDeleteAiArgs = {
  where: AiWhereUniqueInput;
};

export type MutationUpsertAiArgs = {
  where: AiWhereUniqueInput;
  upsert: AiUpsertInput;
};

export type MutationPublishAiArgs = {
  where: AiWhereUniqueInput;
  to?: Array<Stage>;
};

export type MutationUnpublishAiArgs = {
  where: AiWhereUniqueInput;
  from?: Array<Stage>;
};

export type MutationUpdateManyAisConnectionArgs = {
  where?: Maybe<AiManyWhereInput>;
  data: AiUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationDeleteManyAisConnectionArgs = {
  where?: Maybe<AiManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationPublishManyAisConnectionArgs = {
  where?: Maybe<AiManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUnpublishManyAisConnectionArgs = {
  where?: Maybe<AiManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUpdateManyAisArgs = {
  where?: Maybe<AiManyWhereInput>;
  data: AiUpdateManyInput;
};

export type MutationDeleteManyAisArgs = {
  where?: Maybe<AiManyWhereInput>;
};

export type MutationPublishManyAisArgs = {
  where?: Maybe<AiManyWhereInput>;
  to?: Array<Stage>;
};

export type MutationUnpublishManyAisArgs = {
  where?: Maybe<AiManyWhereInput>;
  from?: Array<Stage>;
};

export type MutationCreateMonsterLevelArgs = {
  data: MonsterLevelCreateInput;
};

export type MutationUpdateMonsterLevelArgs = {
  where: MonsterLevelWhereUniqueInput;
  data: MonsterLevelUpdateInput;
};

export type MutationDeleteMonsterLevelArgs = {
  where: MonsterLevelWhereUniqueInput;
};

export type MutationUpsertMonsterLevelArgs = {
  where: MonsterLevelWhereUniqueInput;
  upsert: MonsterLevelUpsertInput;
};

export type MutationPublishMonsterLevelArgs = {
  where: MonsterLevelWhereUniqueInput;
  to?: Array<Stage>;
};

export type MutationUnpublishMonsterLevelArgs = {
  where: MonsterLevelWhereUniqueInput;
  from?: Array<Stage>;
};

export type MutationUpdateManyMonsterLevelsConnectionArgs = {
  where?: Maybe<MonsterLevelManyWhereInput>;
  data: MonsterLevelUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationDeleteManyMonsterLevelsConnectionArgs = {
  where?: Maybe<MonsterLevelManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationPublishManyMonsterLevelsConnectionArgs = {
  where?: Maybe<MonsterLevelManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUnpublishManyMonsterLevelsConnectionArgs = {
  where?: Maybe<MonsterLevelManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUpdateManyMonsterLevelsArgs = {
  where?: Maybe<MonsterLevelManyWhereInput>;
  data: MonsterLevelUpdateManyInput;
};

export type MutationDeleteManyMonsterLevelsArgs = {
  where?: Maybe<MonsterLevelManyWhereInput>;
};

export type MutationPublishManyMonsterLevelsArgs = {
  where?: Maybe<MonsterLevelManyWhereInput>;
  to?: Array<Stage>;
};

export type MutationUnpublishManyMonsterLevelsArgs = {
  where?: Maybe<MonsterLevelManyWhereInput>;
  from?: Array<Stage>;
};

export type MutationCreateSurvivorArgs = {
  data: SurvivorCreateInput;
};

export type MutationUpdateSurvivorArgs = {
  where: SurvivorWhereUniqueInput;
  data: SurvivorUpdateInput;
};

export type MutationDeleteSurvivorArgs = {
  where: SurvivorWhereUniqueInput;
};

export type MutationUpsertSurvivorArgs = {
  where: SurvivorWhereUniqueInput;
  upsert: SurvivorUpsertInput;
};

export type MutationPublishSurvivorArgs = {
  where: SurvivorWhereUniqueInput;
  to?: Array<Stage>;
};

export type MutationUnpublishSurvivorArgs = {
  where: SurvivorWhereUniqueInput;
  from?: Array<Stage>;
};

export type MutationUpdateManySurvivorsConnectionArgs = {
  where?: Maybe<SurvivorManyWhereInput>;
  data: SurvivorUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationDeleteManySurvivorsConnectionArgs = {
  where?: Maybe<SurvivorManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationPublishManySurvivorsConnectionArgs = {
  where?: Maybe<SurvivorManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUnpublishManySurvivorsConnectionArgs = {
  where?: Maybe<SurvivorManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUpdateManySurvivorsArgs = {
  where?: Maybe<SurvivorManyWhereInput>;
  data: SurvivorUpdateManyInput;
};

export type MutationDeleteManySurvivorsArgs = {
  where?: Maybe<SurvivorManyWhereInput>;
};

export type MutationPublishManySurvivorsArgs = {
  where?: Maybe<SurvivorManyWhereInput>;
  to?: Array<Stage>;
};

export type MutationUnpublishManySurvivorsArgs = {
  where?: Maybe<SurvivorManyWhereInput>;
  from?: Array<Stage>;
};

export type MutationCreateWeaponProficiencyTypeArgs = {
  data: WeaponProficiencyTypeCreateInput;
};

export type MutationUpdateWeaponProficiencyTypeArgs = {
  where: WeaponProficiencyTypeWhereUniqueInput;
  data: WeaponProficiencyTypeUpdateInput;
};

export type MutationDeleteWeaponProficiencyTypeArgs = {
  where: WeaponProficiencyTypeWhereUniqueInput;
};

export type MutationUpsertWeaponProficiencyTypeArgs = {
  where: WeaponProficiencyTypeWhereUniqueInput;
  upsert: WeaponProficiencyTypeUpsertInput;
};

export type MutationPublishWeaponProficiencyTypeArgs = {
  where: WeaponProficiencyTypeWhereUniqueInput;
  to?: Array<Stage>;
};

export type MutationUnpublishWeaponProficiencyTypeArgs = {
  where: WeaponProficiencyTypeWhereUniqueInput;
  from?: Array<Stage>;
};

export type MutationUpdateManyWeaponProficiencyTypesConnectionArgs = {
  where?: Maybe<WeaponProficiencyTypeManyWhereInput>;
  data: WeaponProficiencyTypeUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationDeleteManyWeaponProficiencyTypesConnectionArgs = {
  where?: Maybe<WeaponProficiencyTypeManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationPublishManyWeaponProficiencyTypesConnectionArgs = {
  where?: Maybe<WeaponProficiencyTypeManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUnpublishManyWeaponProficiencyTypesConnectionArgs = {
  where?: Maybe<WeaponProficiencyTypeManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUpdateManyWeaponProficiencyTypesArgs = {
  where?: Maybe<WeaponProficiencyTypeManyWhereInput>;
  data: WeaponProficiencyTypeUpdateManyInput;
};

export type MutationDeleteManyWeaponProficiencyTypesArgs = {
  where?: Maybe<WeaponProficiencyTypeManyWhereInput>;
};

export type MutationPublishManyWeaponProficiencyTypesArgs = {
  where?: Maybe<WeaponProficiencyTypeManyWhereInput>;
  to?: Array<Stage>;
};

export type MutationUnpublishManyWeaponProficiencyTypesArgs = {
  where?: Maybe<WeaponProficiencyTypeManyWhereInput>;
  from?: Array<Stage>;
};

export type MutationCreateFightingArtArgs = {
  data: FightingArtCreateInput;
};

export type MutationUpdateFightingArtArgs = {
  where: FightingArtWhereUniqueInput;
  data: FightingArtUpdateInput;
};

export type MutationDeleteFightingArtArgs = {
  where: FightingArtWhereUniqueInput;
};

export type MutationUpsertFightingArtArgs = {
  where: FightingArtWhereUniqueInput;
  upsert: FightingArtUpsertInput;
};

export type MutationPublishFightingArtArgs = {
  where: FightingArtWhereUniqueInput;
  to?: Array<Stage>;
};

export type MutationUnpublishFightingArtArgs = {
  where: FightingArtWhereUniqueInput;
  from?: Array<Stage>;
};

export type MutationUpdateManyFightingArtsConnectionArgs = {
  where?: Maybe<FightingArtManyWhereInput>;
  data: FightingArtUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationDeleteManyFightingArtsConnectionArgs = {
  where?: Maybe<FightingArtManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationPublishManyFightingArtsConnectionArgs = {
  where?: Maybe<FightingArtManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUnpublishManyFightingArtsConnectionArgs = {
  where?: Maybe<FightingArtManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUpdateManyFightingArtsArgs = {
  where?: Maybe<FightingArtManyWhereInput>;
  data: FightingArtUpdateManyInput;
};

export type MutationDeleteManyFightingArtsArgs = {
  where?: Maybe<FightingArtManyWhereInput>;
};

export type MutationPublishManyFightingArtsArgs = {
  where?: Maybe<FightingArtManyWhereInput>;
  to?: Array<Stage>;
};

export type MutationUnpublishManyFightingArtsArgs = {
  where?: Maybe<FightingArtManyWhereInput>;
  from?: Array<Stage>;
};

export type MutationCreateDisorderArgs = {
  data: DisorderCreateInput;
};

export type MutationUpdateDisorderArgs = {
  where: DisorderWhereUniqueInput;
  data: DisorderUpdateInput;
};

export type MutationDeleteDisorderArgs = {
  where: DisorderWhereUniqueInput;
};

export type MutationUpsertDisorderArgs = {
  where: DisorderWhereUniqueInput;
  upsert: DisorderUpsertInput;
};

export type MutationPublishDisorderArgs = {
  where: DisorderWhereUniqueInput;
  to?: Array<Stage>;
};

export type MutationUnpublishDisorderArgs = {
  where: DisorderWhereUniqueInput;
  from?: Array<Stage>;
};

export type MutationUpdateManyDisordersConnectionArgs = {
  where?: Maybe<DisorderManyWhereInput>;
  data: DisorderUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationDeleteManyDisordersConnectionArgs = {
  where?: Maybe<DisorderManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationPublishManyDisordersConnectionArgs = {
  where?: Maybe<DisorderManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUnpublishManyDisordersConnectionArgs = {
  where?: Maybe<DisorderManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUpdateManyDisordersArgs = {
  where?: Maybe<DisorderManyWhereInput>;
  data: DisorderUpdateManyInput;
};

export type MutationDeleteManyDisordersArgs = {
  where?: Maybe<DisorderManyWhereInput>;
};

export type MutationPublishManyDisordersArgs = {
  where?: Maybe<DisorderManyWhereInput>;
  to?: Array<Stage>;
};

export type MutationUnpublishManyDisordersArgs = {
  where?: Maybe<DisorderManyWhereInput>;
  from?: Array<Stage>;
};

export type MutationCreateSettlementArgs = {
  data: SettlementCreateInput;
};

export type MutationUpdateSettlementArgs = {
  where: SettlementWhereUniqueInput;
  data: SettlementUpdateInput;
};

export type MutationDeleteSettlementArgs = {
  where: SettlementWhereUniqueInput;
};

export type MutationUpsertSettlementArgs = {
  where: SettlementWhereUniqueInput;
  upsert: SettlementUpsertInput;
};

export type MutationPublishSettlementArgs = {
  where: SettlementWhereUniqueInput;
  to?: Array<Stage>;
};

export type MutationUnpublishSettlementArgs = {
  where: SettlementWhereUniqueInput;
  from?: Array<Stage>;
};

export type MutationUpdateManySettlementsConnectionArgs = {
  where?: Maybe<SettlementManyWhereInput>;
  data: SettlementUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationDeleteManySettlementsConnectionArgs = {
  where?: Maybe<SettlementManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationPublishManySettlementsConnectionArgs = {
  where?: Maybe<SettlementManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUnpublishManySettlementsConnectionArgs = {
  where?: Maybe<SettlementManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type MutationUpdateManySettlementsArgs = {
  where?: Maybe<SettlementManyWhereInput>;
  data: SettlementUpdateManyInput;
};

export type MutationDeleteManySettlementsArgs = {
  where?: Maybe<SettlementManyWhereInput>;
};

export type MutationPublishManySettlementsArgs = {
  where?: Maybe<SettlementManyWhereInput>;
  to?: Array<Stage>;
};

export type MutationUnpublishManySettlementsArgs = {
  where?: Maybe<SettlementManyWhereInput>;
  from?: Array<Stage>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

export type Player = Node & {
  __typename?: 'Player';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Player>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  settlements: Array<Settlement>;
  /** List of Player versions */
  history: Array<Version>;
};

export type PlayerDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type PlayerCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PlayerUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PlayerPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PlayerSettlementsArgs = {
  where?: Maybe<SettlementWhereInput>;
  orderBy?: Maybe<SettlementOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};

export type PlayerHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type PlayerConnectInput = {
  /** Document to connect */
  where: PlayerWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PlayerConnection = {
  __typename?: 'PlayerConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PlayerEdge>;
  aggregate: Aggregate;
};

export type PlayerCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
  settlements?: Maybe<SettlementCreateManyInlineInput>;
};

export type PlayerCreateManyInlineInput = {
  /** Create and connect multiple existing Player documents */
  create?: Maybe<Array<PlayerCreateInput>>;
  /** Connect multiple existing Player documents */
  connect?: Maybe<Array<PlayerWhereUniqueInput>>;
};

export type PlayerCreateOneInlineInput = {
  /** Create and connect one Player document */
  create?: Maybe<PlayerCreateInput>;
  /** Connect one existing Player document */
  connect?: Maybe<PlayerWhereUniqueInput>;
};

/** An edge in a connection. */
export type PlayerEdge = {
  __typename?: 'PlayerEdge';
  /** The item at the end of the edge. */
  node: Player;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type PlayerManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PlayerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PlayerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PlayerWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  userId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  userId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  userId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  userId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  userId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  userId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  userId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  userId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  userId_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  settlements_every?: Maybe<SettlementWhereInput>;
  settlements_some?: Maybe<SettlementWhereInput>;
  settlements_none?: Maybe<SettlementWhereInput>;
};

export enum PlayerOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UserIdAsc = 'userId_ASC',
  UserIdDesc = 'userId_DESC',
}

export type PlayerUpdateInput = {
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  settlements?: Maybe<SettlementUpdateManyInlineInput>;
};

export type PlayerUpdateManyInlineInput = {
  /** Create and connect multiple Player documents */
  create?: Maybe<Array<PlayerCreateInput>>;
  /** Connect multiple existing Player documents */
  connect?: Maybe<Array<PlayerConnectInput>>;
  /** Override currently-connected documents with multiple existing Player documents */
  set?: Maybe<Array<PlayerWhereUniqueInput>>;
  /** Update multiple Player documents */
  update?: Maybe<Array<PlayerUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Player documents */
  upsert?: Maybe<Array<PlayerUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Player documents */
  disconnect?: Maybe<Array<PlayerWhereUniqueInput>>;
  /** Delete multiple Player documents */
  delete?: Maybe<Array<PlayerWhereUniqueInput>>;
};

export type PlayerUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
};

export type PlayerUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PlayerWhereInput;
  /** Update many input */
  data: PlayerUpdateManyInput;
};

export type PlayerUpdateOneInlineInput = {
  /** Create and connect one Player document */
  create?: Maybe<PlayerCreateInput>;
  /** Update single Player document */
  update?: Maybe<PlayerUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Player document */
  upsert?: Maybe<PlayerUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Player document */
  connect?: Maybe<PlayerWhereUniqueInput>;
  /** Disconnect currently connected Player document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Player document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type PlayerUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PlayerWhereUniqueInput;
  /** Document to update */
  data: PlayerUpdateInput;
};

export type PlayerUpsertInput = {
  /** Create document if it didn't exist */
  create: PlayerCreateInput;
  /** Update document if it exists */
  update: PlayerUpdateInput;
};

export type PlayerUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PlayerWhereUniqueInput;
  /** Upsert data */
  data: PlayerUpsertInput;
};

/** Identifies documents */
export type PlayerWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PlayerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PlayerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PlayerWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  userId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  userId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  userId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  userId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  userId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  userId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  userId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  userId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  userId_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  settlements_every?: Maybe<SettlementWhereInput>;
  settlements_some?: Maybe<SettlementWhereInput>;
  settlements_none?: Maybe<SettlementWhereInput>;
};

/** References Player record uniquely */
export type PlayerWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  userId?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple showdowns */
  showdowns: Array<Showdown>;
  /** Retrieve a single showdown */
  showdown?: Maybe<Showdown>;
  /** Retrieve multiple showdowns using the Relay connection interface */
  showdownsConnection: ShowdownConnection;
  /** Retrieve document version */
  showdownVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple players */
  players: Array<Player>;
  /** Retrieve a single player */
  player?: Maybe<Player>;
  /** Retrieve multiple players using the Relay connection interface */
  playersConnection: PlayerConnection;
  /** Retrieve document version */
  playerVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple armors */
  armors: Array<Armor>;
  /** Retrieve a single armor */
  armor?: Maybe<Armor>;
  /** Retrieve multiple armors using the Relay connection interface */
  armorsConnection: ArmorConnection;
  /** Retrieve document version */
  armorVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple weapons */
  weapons: Array<Weapon>;
  /** Retrieve a single weapon */
  weapon?: Maybe<Weapon>;
  /** Retrieve multiple weapons using the Relay connection interface */
  weaponsConnection: WeaponConnection;
  /** Retrieve document version */
  weaponVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple monsters */
  monsters: Array<Monster>;
  /** Retrieve a single monster */
  monster?: Maybe<Monster>;
  /** Retrieve multiple monsters using the Relay connection interface */
  monstersConnection: MonsterConnection;
  /** Retrieve document version */
  monsterVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple ais */
  ais: Array<Ai>;
  /** Retrieve a single ai */
  ai?: Maybe<Ai>;
  /** Retrieve multiple ais using the Relay connection interface */
  aisConnection: AiConnection;
  /** Retrieve document version */
  aiVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple monsterLevels */
  monsterLevels: Array<MonsterLevel>;
  /** Retrieve a single monsterLevel */
  monsterLevel?: Maybe<MonsterLevel>;
  /** Retrieve multiple monsterLevels using the Relay connection interface */
  monsterLevelsConnection: MonsterLevelConnection;
  /** Retrieve document version */
  monsterLevelVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple survivors */
  survivors: Array<Survivor>;
  /** Retrieve a single survivor */
  survivor?: Maybe<Survivor>;
  /** Retrieve multiple survivors using the Relay connection interface */
  survivorsConnection: SurvivorConnection;
  /** Retrieve document version */
  survivorVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple weaponProficiencyTypes */
  weaponProficiencyTypes: Array<WeaponProficiencyType>;
  /** Retrieve a single weaponProficiencyType */
  weaponProficiencyType?: Maybe<WeaponProficiencyType>;
  /** Retrieve multiple weaponProficiencyTypes using the Relay connection interface */
  weaponProficiencyTypesConnection: WeaponProficiencyTypeConnection;
  /** Retrieve document version */
  weaponProficiencyTypeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple fightingArts */
  fightingArts: Array<FightingArt>;
  /** Retrieve a single fightingArt */
  fightingArt?: Maybe<FightingArt>;
  /** Retrieve multiple fightingArts using the Relay connection interface */
  fightingArtsConnection: FightingArtConnection;
  /** Retrieve document version */
  fightingArtVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple disorders */
  disorders: Array<Disorder>;
  /** Retrieve a single disorder */
  disorder?: Maybe<Disorder>;
  /** Retrieve multiple disorders using the Relay connection interface */
  disordersConnection: DisorderConnection;
  /** Retrieve document version */
  disorderVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple settlements */
  settlements: Array<Settlement>;
  /** Retrieve a single settlement */
  settlement?: Maybe<Settlement>;
  /** Retrieve multiple settlements using the Relay connection interface */
  settlementsConnection: SettlementConnection;
  /** Retrieve document version */
  settlementVersion?: Maybe<DocumentVersion>;
};

export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryShowdownsArgs = {
  where?: Maybe<ShowdownWhereInput>;
  orderBy?: Maybe<ShowdownOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryShowdownArgs = {
  where: ShowdownWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryShowdownsConnectionArgs = {
  where?: Maybe<ShowdownWhereInput>;
  orderBy?: Maybe<ShowdownOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryShowdownVersionArgs = {
  where: VersionWhereInput;
};

export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};

export type QueryPlayersArgs = {
  where?: Maybe<PlayerWhereInput>;
  orderBy?: Maybe<PlayerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryPlayerArgs = {
  where: PlayerWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryPlayersConnectionArgs = {
  where?: Maybe<PlayerWhereInput>;
  orderBy?: Maybe<PlayerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryPlayerVersionArgs = {
  where: VersionWhereInput;
};

export type QueryArmorsArgs = {
  where?: Maybe<ArmorWhereInput>;
  orderBy?: Maybe<ArmorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryArmorArgs = {
  where: ArmorWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryArmorsConnectionArgs = {
  where?: Maybe<ArmorWhereInput>;
  orderBy?: Maybe<ArmorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryArmorVersionArgs = {
  where: VersionWhereInput;
};

export type QueryWeaponsArgs = {
  where?: Maybe<WeaponWhereInput>;
  orderBy?: Maybe<WeaponOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryWeaponArgs = {
  where: WeaponWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryWeaponsConnectionArgs = {
  where?: Maybe<WeaponWhereInput>;
  orderBy?: Maybe<WeaponOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryWeaponVersionArgs = {
  where: VersionWhereInput;
};

export type QueryMonstersArgs = {
  where?: Maybe<MonsterWhereInput>;
  orderBy?: Maybe<MonsterOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryMonsterArgs = {
  where: MonsterWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryMonstersConnectionArgs = {
  where?: Maybe<MonsterWhereInput>;
  orderBy?: Maybe<MonsterOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryMonsterVersionArgs = {
  where: VersionWhereInput;
};

export type QueryAisArgs = {
  where?: Maybe<AiWhereInput>;
  orderBy?: Maybe<AiOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryAiArgs = {
  where: AiWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryAisConnectionArgs = {
  where?: Maybe<AiWhereInput>;
  orderBy?: Maybe<AiOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryAiVersionArgs = {
  where: VersionWhereInput;
};

export type QueryMonsterLevelsArgs = {
  where?: Maybe<MonsterLevelWhereInput>;
  orderBy?: Maybe<MonsterLevelOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryMonsterLevelArgs = {
  where: MonsterLevelWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryMonsterLevelsConnectionArgs = {
  where?: Maybe<MonsterLevelWhereInput>;
  orderBy?: Maybe<MonsterLevelOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryMonsterLevelVersionArgs = {
  where: VersionWhereInput;
};

export type QuerySurvivorsArgs = {
  where?: Maybe<SurvivorWhereInput>;
  orderBy?: Maybe<SurvivorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QuerySurvivorArgs = {
  where: SurvivorWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QuerySurvivorsConnectionArgs = {
  where?: Maybe<SurvivorWhereInput>;
  orderBy?: Maybe<SurvivorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QuerySurvivorVersionArgs = {
  where: VersionWhereInput;
};

export type QueryWeaponProficiencyTypesArgs = {
  where?: Maybe<WeaponProficiencyTypeWhereInput>;
  orderBy?: Maybe<WeaponProficiencyTypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryWeaponProficiencyTypeArgs = {
  where: WeaponProficiencyTypeWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryWeaponProficiencyTypesConnectionArgs = {
  where?: Maybe<WeaponProficiencyTypeWhereInput>;
  orderBy?: Maybe<WeaponProficiencyTypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryWeaponProficiencyTypeVersionArgs = {
  where: VersionWhereInput;
};

export type QueryFightingArtsArgs = {
  where?: Maybe<FightingArtWhereInput>;
  orderBy?: Maybe<FightingArtOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryFightingArtArgs = {
  where: FightingArtWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryFightingArtsConnectionArgs = {
  where?: Maybe<FightingArtWhereInput>;
  orderBy?: Maybe<FightingArtOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryFightingArtVersionArgs = {
  where: VersionWhereInput;
};

export type QueryDisordersArgs = {
  where?: Maybe<DisorderWhereInput>;
  orderBy?: Maybe<DisorderOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryDisorderArgs = {
  where: DisorderWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryDisordersConnectionArgs = {
  where?: Maybe<DisorderWhereInput>;
  orderBy?: Maybe<DisorderOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryDisorderVersionArgs = {
  where: VersionWhereInput;
};

export type QuerySettlementsArgs = {
  where?: Maybe<SettlementWhereInput>;
  orderBy?: Maybe<SettlementOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QuerySettlementArgs = {
  where: SettlementWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QuerySettlementsConnectionArgs = {
  where?: Maybe<SettlementWhereInput>;
  orderBy?: Maybe<SettlementOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QuerySettlementVersionArgs = {
  where: VersionWhereInput;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

export type Settlement = Node & {
  __typename?: 'Settlement';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Settlement>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  survivors: Array<Survivor>;
  showdowns: Array<Showdown>;
  players: Array<Player>;
  /** List of Settlement versions */
  history: Array<Version>;
};

export type SettlementDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type SettlementCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type SettlementUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type SettlementPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type SettlementSurvivorsArgs = {
  where?: Maybe<SurvivorWhereInput>;
  orderBy?: Maybe<SurvivorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};

export type SettlementShowdownsArgs = {
  where?: Maybe<ShowdownWhereInput>;
  orderBy?: Maybe<ShowdownOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};

export type SettlementPlayersArgs = {
  where?: Maybe<PlayerWhereInput>;
  orderBy?: Maybe<PlayerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};

export type SettlementHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type SettlementConnectInput = {
  /** Document to connect */
  where: SettlementWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type SettlementConnection = {
  __typename?: 'SettlementConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<SettlementEdge>;
  aggregate: Aggregate;
};

export type SettlementCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  survivors?: Maybe<SurvivorCreateManyInlineInput>;
  showdowns?: Maybe<ShowdownCreateManyInlineInput>;
  players?: Maybe<PlayerCreateManyInlineInput>;
};

export type SettlementCreateManyInlineInput = {
  /** Create and connect multiple existing Settlement documents */
  create?: Maybe<Array<SettlementCreateInput>>;
  /** Connect multiple existing Settlement documents */
  connect?: Maybe<Array<SettlementWhereUniqueInput>>;
};

export type SettlementCreateOneInlineInput = {
  /** Create and connect one Settlement document */
  create?: Maybe<SettlementCreateInput>;
  /** Connect one existing Settlement document */
  connect?: Maybe<SettlementWhereUniqueInput>;
};

/** An edge in a connection. */
export type SettlementEdge = {
  __typename?: 'SettlementEdge';
  /** The item at the end of the edge. */
  node: Settlement;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type SettlementManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SettlementWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SettlementWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SettlementWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  survivors_every?: Maybe<SurvivorWhereInput>;
  survivors_some?: Maybe<SurvivorWhereInput>;
  survivors_none?: Maybe<SurvivorWhereInput>;
  showdowns_every?: Maybe<ShowdownWhereInput>;
  showdowns_some?: Maybe<ShowdownWhereInput>;
  showdowns_none?: Maybe<ShowdownWhereInput>;
  players_every?: Maybe<PlayerWhereInput>;
  players_some?: Maybe<PlayerWhereInput>;
  players_none?: Maybe<PlayerWhereInput>;
};

export enum SettlementOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

export type SettlementUpdateInput = {
  name?: Maybe<Scalars['String']>;
  survivors?: Maybe<SurvivorUpdateManyInlineInput>;
  showdowns?: Maybe<ShowdownUpdateManyInlineInput>;
  players?: Maybe<PlayerUpdateManyInlineInput>;
};

export type SettlementUpdateManyInlineInput = {
  /** Create and connect multiple Settlement documents */
  create?: Maybe<Array<SettlementCreateInput>>;
  /** Connect multiple existing Settlement documents */
  connect?: Maybe<Array<SettlementConnectInput>>;
  /** Override currently-connected documents with multiple existing Settlement documents */
  set?: Maybe<Array<SettlementWhereUniqueInput>>;
  /** Update multiple Settlement documents */
  update?: Maybe<Array<SettlementUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Settlement documents */
  upsert?: Maybe<Array<SettlementUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Settlement documents */
  disconnect?: Maybe<Array<SettlementWhereUniqueInput>>;
  /** Delete multiple Settlement documents */
  delete?: Maybe<Array<SettlementWhereUniqueInput>>;
};

export type SettlementUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
};

export type SettlementUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: SettlementWhereInput;
  /** Update many input */
  data: SettlementUpdateManyInput;
};

export type SettlementUpdateOneInlineInput = {
  /** Create and connect one Settlement document */
  create?: Maybe<SettlementCreateInput>;
  /** Update single Settlement document */
  update?: Maybe<SettlementUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Settlement document */
  upsert?: Maybe<SettlementUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Settlement document */
  connect?: Maybe<SettlementWhereUniqueInput>;
  /** Disconnect currently connected Settlement document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Settlement document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type SettlementUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SettlementWhereUniqueInput;
  /** Document to update */
  data: SettlementUpdateInput;
};

export type SettlementUpsertInput = {
  /** Create document if it didn't exist */
  create: SettlementCreateInput;
  /** Update document if it exists */
  update: SettlementUpdateInput;
};

export type SettlementUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SettlementWhereUniqueInput;
  /** Upsert data */
  data: SettlementUpsertInput;
};

/** Identifies documents */
export type SettlementWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SettlementWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SettlementWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SettlementWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  survivors_every?: Maybe<SurvivorWhereInput>;
  survivors_some?: Maybe<SurvivorWhereInput>;
  survivors_none?: Maybe<SurvivorWhereInput>;
  showdowns_every?: Maybe<ShowdownWhereInput>;
  showdowns_some?: Maybe<ShowdownWhereInput>;
  showdowns_none?: Maybe<ShowdownWhereInput>;
  players_every?: Maybe<PlayerWhereInput>;
  players_some?: Maybe<PlayerWhereInput>;
  players_none?: Maybe<PlayerWhereInput>;
};

/** References Settlement record uniquely */
export type SettlementWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Showdown = Node & {
  __typename?: 'Showdown';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Showdown>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  settlement?: Maybe<Settlement>;
  monsterLevel?: Maybe<MonsterLevel>;
  /** List of Showdown versions */
  history: Array<Version>;
};

export type ShowdownDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type ShowdownCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ShowdownUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ShowdownPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ShowdownSettlementArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ShowdownMonsterLevelArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ShowdownHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ShowdownConnectInput = {
  /** Document to connect */
  where: ShowdownWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ShowdownConnection = {
  __typename?: 'ShowdownConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ShowdownEdge>;
  aggregate: Aggregate;
};

export type ShowdownCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
  settlement?: Maybe<SettlementCreateOneInlineInput>;
  monsterLevel?: Maybe<MonsterLevelCreateOneInlineInput>;
};

export type ShowdownCreateManyInlineInput = {
  /** Create and connect multiple existing Showdown documents */
  create?: Maybe<Array<ShowdownCreateInput>>;
  /** Connect multiple existing Showdown documents */
  connect?: Maybe<Array<ShowdownWhereUniqueInput>>;
};

export type ShowdownCreateOneInlineInput = {
  /** Create and connect one Showdown document */
  create?: Maybe<ShowdownCreateInput>;
  /** Connect one existing Showdown document */
  connect?: Maybe<ShowdownWhereUniqueInput>;
};

/** An edge in a connection. */
export type ShowdownEdge = {
  __typename?: 'ShowdownEdge';
  /** The item at the end of the edge. */
  node: Showdown;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ShowdownManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShowdownWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShowdownWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShowdownWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  year?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  year_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  year_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  year_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  year_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  year_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  year_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  year_gte?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  settlement?: Maybe<SettlementWhereInput>;
  monsterLevel?: Maybe<MonsterLevelWhereInput>;
};

export enum ShowdownOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  YearAsc = 'year_ASC',
  YearDesc = 'year_DESC',
}

export type ShowdownUpdateInput = {
  year?: Maybe<Scalars['Int']>;
  settlement?: Maybe<SettlementUpdateOneInlineInput>;
  monsterLevel?: Maybe<MonsterLevelUpdateOneInlineInput>;
};

export type ShowdownUpdateManyInlineInput = {
  /** Create and connect multiple Showdown documents */
  create?: Maybe<Array<ShowdownCreateInput>>;
  /** Connect multiple existing Showdown documents */
  connect?: Maybe<Array<ShowdownConnectInput>>;
  /** Override currently-connected documents with multiple existing Showdown documents */
  set?: Maybe<Array<ShowdownWhereUniqueInput>>;
  /** Update multiple Showdown documents */
  update?: Maybe<Array<ShowdownUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Showdown documents */
  upsert?: Maybe<Array<ShowdownUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Showdown documents */
  disconnect?: Maybe<Array<ShowdownWhereUniqueInput>>;
  /** Delete multiple Showdown documents */
  delete?: Maybe<Array<ShowdownWhereUniqueInput>>;
};

export type ShowdownUpdateManyInput = {
  year?: Maybe<Scalars['Int']>;
};

export type ShowdownUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ShowdownWhereInput;
  /** Update many input */
  data: ShowdownUpdateManyInput;
};

export type ShowdownUpdateOneInlineInput = {
  /** Create and connect one Showdown document */
  create?: Maybe<ShowdownCreateInput>;
  /** Update single Showdown document */
  update?: Maybe<ShowdownUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Showdown document */
  upsert?: Maybe<ShowdownUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Showdown document */
  connect?: Maybe<ShowdownWhereUniqueInput>;
  /** Disconnect currently connected Showdown document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Showdown document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ShowdownUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ShowdownWhereUniqueInput;
  /** Document to update */
  data: ShowdownUpdateInput;
};

export type ShowdownUpsertInput = {
  /** Create document if it didn't exist */
  create: ShowdownCreateInput;
  /** Update document if it exists */
  update: ShowdownUpdateInput;
};

export type ShowdownUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ShowdownWhereUniqueInput;
  /** Upsert data */
  data: ShowdownUpsertInput;
};

/** Identifies documents */
export type ShowdownWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShowdownWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShowdownWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShowdownWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  year?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  year_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  year_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  year_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  year_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  year_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  year_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  year_gte?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  settlement?: Maybe<SettlementWhereInput>;
  monsterLevel?: Maybe<MonsterLevelWhereInput>;
};

/** References Showdown record uniquely */
export type ShowdownWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
}

export enum SurvivalAction {
  Dodge = 'dodge',
  Dash = 'dash',
  Encourage = 'encourage',
  Surge = 'surge',
}

export type Survivor = Node & {
  __typename?: 'Survivor';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Survivor>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  survivalPoint: Scalars['Int'];
  movement: Scalars['Int'];
  accuracy: Scalars['Int'];
  strength: Scalars['Int'];
  evasion: Scalars['Int'];
  luck: Scalars['Int'];
  speed: Scalars['Int'];
  movementModifier: Scalars['Int'];
  accuracyModifier: Scalars['Int'];
  strengthModifier: Scalars['Int'];
  evasionModifier: Scalars['Int'];
  luckModifier: Scalars['Int'];
  speedModifier: Scalars['Int'];
  insanity: Scalars['Int'];
  head: Scalars['Int'];
  arm: Scalars['Int'];
  body: Scalars['Int'];
  waist: Scalars['Int'];
  leg: Scalars['Int'];
  huntXp: Scalars['Int'];
  weaponProficiencyLevel: Scalars['Int'];
  courage: Scalars['Int'];
  understanding: Scalars['Int'];
  isRerollUsed: Scalars['Boolean'];
  ability?: Maybe<Scalars['String']>;
  impairment?: Maybe<Scalars['String']>;
  isSkipNextHunt: Scalars['Boolean'];
  isCannotUseFightingArt: Scalars['Boolean'];
  isDead: Scalars['Boolean'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  fightingArts: Array<FightingArt>;
  disorders: Array<Disorder>;
  settlement?: Maybe<Settlement>;
  survivalActions: Array<SurvivalAction>;
  /** List of Survivor versions */
  history: Array<Version>;
};

export type SurvivorDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type SurvivorCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type SurvivorUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type SurvivorPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type SurvivorFightingArtsArgs = {
  where?: Maybe<FightingArtWhereInput>;
  orderBy?: Maybe<FightingArtOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};

export type SurvivorDisordersArgs = {
  where?: Maybe<DisorderWhereInput>;
  orderBy?: Maybe<DisorderOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};

export type SurvivorSettlementArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type SurvivorHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type SurvivorConnectInput = {
  /** Document to connect */
  where: SurvivorWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type SurvivorConnection = {
  __typename?: 'SurvivorConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<SurvivorEdge>;
  aggregate: Aggregate;
};

export type SurvivorCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  survivalPoint: Scalars['Int'];
  movement: Scalars['Int'];
  accuracy: Scalars['Int'];
  strength: Scalars['Int'];
  evasion: Scalars['Int'];
  luck: Scalars['Int'];
  speed: Scalars['Int'];
  movementModifier: Scalars['Int'];
  accuracyModifier: Scalars['Int'];
  strengthModifier: Scalars['Int'];
  evasionModifier: Scalars['Int'];
  luckModifier: Scalars['Int'];
  speedModifier: Scalars['Int'];
  insanity: Scalars['Int'];
  head: Scalars['Int'];
  arm: Scalars['Int'];
  body: Scalars['Int'];
  waist: Scalars['Int'];
  leg: Scalars['Int'];
  huntXp: Scalars['Int'];
  weaponProficiencyLevel: Scalars['Int'];
  courage: Scalars['Int'];
  understanding: Scalars['Int'];
  isRerollUsed: Scalars['Boolean'];
  ability?: Maybe<Scalars['String']>;
  impairment?: Maybe<Scalars['String']>;
  isSkipNextHunt: Scalars['Boolean'];
  isCannotUseFightingArt: Scalars['Boolean'];
  isDead: Scalars['Boolean'];
  fightingArts?: Maybe<FightingArtCreateManyInlineInput>;
  disorders?: Maybe<DisorderCreateManyInlineInput>;
  settlement?: Maybe<SettlementCreateOneInlineInput>;
  survivalActions?: Maybe<Array<SurvivalAction>>;
};

export type SurvivorCreateManyInlineInput = {
  /** Create and connect multiple existing Survivor documents */
  create?: Maybe<Array<SurvivorCreateInput>>;
  /** Connect multiple existing Survivor documents */
  connect?: Maybe<Array<SurvivorWhereUniqueInput>>;
};

export type SurvivorCreateOneInlineInput = {
  /** Create and connect one Survivor document */
  create?: Maybe<SurvivorCreateInput>;
  /** Connect one existing Survivor document */
  connect?: Maybe<SurvivorWhereUniqueInput>;
};

/** An edge in a connection. */
export type SurvivorEdge = {
  __typename?: 'SurvivorEdge';
  /** The item at the end of the edge. */
  node: Survivor;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type SurvivorManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SurvivorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SurvivorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SurvivorWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  survivalPoint?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  survivalPoint_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  survivalPoint_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  survivalPoint_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  survivalPoint_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  survivalPoint_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  survivalPoint_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  survivalPoint_gte?: Maybe<Scalars['Int']>;
  movement?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  movement_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  movement_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  movement_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  movement_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  movement_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  movement_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  movement_gte?: Maybe<Scalars['Int']>;
  accuracy?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  accuracy_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  accuracy_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  accuracy_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  accuracy_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  accuracy_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  accuracy_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  accuracy_gte?: Maybe<Scalars['Int']>;
  strength?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  strength_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  strength_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  strength_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  strength_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  strength_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  strength_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  strength_gte?: Maybe<Scalars['Int']>;
  evasion?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  evasion_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  evasion_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  evasion_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  evasion_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  evasion_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  evasion_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  evasion_gte?: Maybe<Scalars['Int']>;
  luck?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  luck_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  luck_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  luck_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  luck_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  luck_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  luck_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  luck_gte?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  speed_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  speed_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  speed_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  speed_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  speed_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  speed_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  speed_gte?: Maybe<Scalars['Int']>;
  movementModifier?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  movementModifier_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  movementModifier_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  movementModifier_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  movementModifier_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  movementModifier_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  movementModifier_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  movementModifier_gte?: Maybe<Scalars['Int']>;
  accuracyModifier?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  accuracyModifier_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  accuracyModifier_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  accuracyModifier_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  accuracyModifier_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  accuracyModifier_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  accuracyModifier_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  accuracyModifier_gte?: Maybe<Scalars['Int']>;
  strengthModifier?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  strengthModifier_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  strengthModifier_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  strengthModifier_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  strengthModifier_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  strengthModifier_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  strengthModifier_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  strengthModifier_gte?: Maybe<Scalars['Int']>;
  evasionModifier?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  evasionModifier_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  evasionModifier_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  evasionModifier_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  evasionModifier_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  evasionModifier_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  evasionModifier_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  evasionModifier_gte?: Maybe<Scalars['Int']>;
  luckModifier?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  luckModifier_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  luckModifier_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  luckModifier_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  luckModifier_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  luckModifier_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  luckModifier_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  luckModifier_gte?: Maybe<Scalars['Int']>;
  speedModifier?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  speedModifier_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  speedModifier_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  speedModifier_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  speedModifier_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  speedModifier_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  speedModifier_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  speedModifier_gte?: Maybe<Scalars['Int']>;
  insanity?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  insanity_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  insanity_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  insanity_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  insanity_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  insanity_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  insanity_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  insanity_gte?: Maybe<Scalars['Int']>;
  head?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  head_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  head_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  head_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  head_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  head_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  head_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  head_gte?: Maybe<Scalars['Int']>;
  arm?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  arm_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  arm_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  arm_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  arm_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  arm_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  arm_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  arm_gte?: Maybe<Scalars['Int']>;
  body?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  body_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  body_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  body_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  body_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  body_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  body_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  body_gte?: Maybe<Scalars['Int']>;
  waist?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  waist_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  waist_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  waist_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  waist_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  waist_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  waist_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  waist_gte?: Maybe<Scalars['Int']>;
  leg?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  leg_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  leg_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  leg_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  leg_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  leg_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  leg_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  leg_gte?: Maybe<Scalars['Int']>;
  huntXp?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  huntXp_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  huntXp_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  huntXp_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  huntXp_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  huntXp_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  huntXp_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  huntXp_gte?: Maybe<Scalars['Int']>;
  weaponProficiencyLevel?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  weaponProficiencyLevel_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  weaponProficiencyLevel_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  weaponProficiencyLevel_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  weaponProficiencyLevel_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  weaponProficiencyLevel_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  weaponProficiencyLevel_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  weaponProficiencyLevel_gte?: Maybe<Scalars['Int']>;
  courage?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  courage_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  courage_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  courage_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  courage_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  courage_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  courage_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  courage_gte?: Maybe<Scalars['Int']>;
  understanding?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  understanding_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  understanding_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  understanding_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  understanding_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  understanding_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  understanding_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  understanding_gte?: Maybe<Scalars['Int']>;
  isRerollUsed?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isRerollUsed_not?: Maybe<Scalars['Boolean']>;
  ability?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  ability_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ability_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  ability_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  ability_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  ability_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  ability_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  ability_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  ability_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  ability_not_ends_with?: Maybe<Scalars['String']>;
  impairment?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  impairment_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  impairment_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  impairment_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  impairment_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  impairment_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  impairment_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  impairment_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  impairment_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  impairment_not_ends_with?: Maybe<Scalars['String']>;
  isSkipNextHunt?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isSkipNextHunt_not?: Maybe<Scalars['Boolean']>;
  isCannotUseFightingArt?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isCannotUseFightingArt_not?: Maybe<Scalars['Boolean']>;
  isDead?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isDead_not?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  fightingArts_every?: Maybe<FightingArtWhereInput>;
  fightingArts_some?: Maybe<FightingArtWhereInput>;
  fightingArts_none?: Maybe<FightingArtWhereInput>;
  disorders_every?: Maybe<DisorderWhereInput>;
  disorders_some?: Maybe<DisorderWhereInput>;
  disorders_none?: Maybe<DisorderWhereInput>;
  settlement?: Maybe<SettlementWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  survivalActions?: Maybe<Array<SurvivalAction>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  survivalActions_not?: Maybe<Array<SurvivalAction>>;
  /** Matches if the field array contains *all* items provided to the filter */
  survivalActions_contains_all?: Maybe<Array<SurvivalAction>>;
  /** Matches if the field array contains at least one item provided to the filter */
  survivalActions_contains_some?: Maybe<Array<SurvivalAction>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  survivalActions_contains_none?: Maybe<Array<SurvivalAction>>;
};

export enum SurvivorOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SurvivalPointAsc = 'survivalPoint_ASC',
  SurvivalPointDesc = 'survivalPoint_DESC',
  MovementAsc = 'movement_ASC',
  MovementDesc = 'movement_DESC',
  AccuracyAsc = 'accuracy_ASC',
  AccuracyDesc = 'accuracy_DESC',
  StrengthAsc = 'strength_ASC',
  StrengthDesc = 'strength_DESC',
  EvasionAsc = 'evasion_ASC',
  EvasionDesc = 'evasion_DESC',
  LuckAsc = 'luck_ASC',
  LuckDesc = 'luck_DESC',
  SpeedAsc = 'speed_ASC',
  SpeedDesc = 'speed_DESC',
  MovementModifierAsc = 'movementModifier_ASC',
  MovementModifierDesc = 'movementModifier_DESC',
  AccuracyModifierAsc = 'accuracyModifier_ASC',
  AccuracyModifierDesc = 'accuracyModifier_DESC',
  StrengthModifierAsc = 'strengthModifier_ASC',
  StrengthModifierDesc = 'strengthModifier_DESC',
  EvasionModifierAsc = 'evasionModifier_ASC',
  EvasionModifierDesc = 'evasionModifier_DESC',
  LuckModifierAsc = 'luckModifier_ASC',
  LuckModifierDesc = 'luckModifier_DESC',
  SpeedModifierAsc = 'speedModifier_ASC',
  SpeedModifierDesc = 'speedModifier_DESC',
  InsanityAsc = 'insanity_ASC',
  InsanityDesc = 'insanity_DESC',
  HeadAsc = 'head_ASC',
  HeadDesc = 'head_DESC',
  ArmAsc = 'arm_ASC',
  ArmDesc = 'arm_DESC',
  BodyAsc = 'body_ASC',
  BodyDesc = 'body_DESC',
  WaistAsc = 'waist_ASC',
  WaistDesc = 'waist_DESC',
  LegAsc = 'leg_ASC',
  LegDesc = 'leg_DESC',
  HuntXpAsc = 'huntXp_ASC',
  HuntXpDesc = 'huntXp_DESC',
  WeaponProficiencyLevelAsc = 'weaponProficiencyLevel_ASC',
  WeaponProficiencyLevelDesc = 'weaponProficiencyLevel_DESC',
  CourageAsc = 'courage_ASC',
  CourageDesc = 'courage_DESC',
  UnderstandingAsc = 'understanding_ASC',
  UnderstandingDesc = 'understanding_DESC',
  IsRerollUsedAsc = 'isRerollUsed_ASC',
  IsRerollUsedDesc = 'isRerollUsed_DESC',
  AbilityAsc = 'ability_ASC',
  AbilityDesc = 'ability_DESC',
  ImpairmentAsc = 'impairment_ASC',
  ImpairmentDesc = 'impairment_DESC',
  IsSkipNextHuntAsc = 'isSkipNextHunt_ASC',
  IsSkipNextHuntDesc = 'isSkipNextHunt_DESC',
  IsCannotUseFightingArtAsc = 'isCannotUseFightingArt_ASC',
  IsCannotUseFightingArtDesc = 'isCannotUseFightingArt_DESC',
  IsDeadAsc = 'isDead_ASC',
  IsDeadDesc = 'isDead_DESC',
  SurvivalActionsAsc = 'survivalActions_ASC',
  SurvivalActionsDesc = 'survivalActions_DESC',
}

export type SurvivorUpdateInput = {
  name?: Maybe<Scalars['String']>;
  survivalPoint?: Maybe<Scalars['Int']>;
  movement?: Maybe<Scalars['Int']>;
  accuracy?: Maybe<Scalars['Int']>;
  strength?: Maybe<Scalars['Int']>;
  evasion?: Maybe<Scalars['Int']>;
  luck?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Int']>;
  movementModifier?: Maybe<Scalars['Int']>;
  accuracyModifier?: Maybe<Scalars['Int']>;
  strengthModifier?: Maybe<Scalars['Int']>;
  evasionModifier?: Maybe<Scalars['Int']>;
  luckModifier?: Maybe<Scalars['Int']>;
  speedModifier?: Maybe<Scalars['Int']>;
  insanity?: Maybe<Scalars['Int']>;
  head?: Maybe<Scalars['Int']>;
  arm?: Maybe<Scalars['Int']>;
  body?: Maybe<Scalars['Int']>;
  waist?: Maybe<Scalars['Int']>;
  leg?: Maybe<Scalars['Int']>;
  huntXp?: Maybe<Scalars['Int']>;
  weaponProficiencyLevel?: Maybe<Scalars['Int']>;
  courage?: Maybe<Scalars['Int']>;
  understanding?: Maybe<Scalars['Int']>;
  isRerollUsed?: Maybe<Scalars['Boolean']>;
  ability?: Maybe<Scalars['String']>;
  impairment?: Maybe<Scalars['String']>;
  isSkipNextHunt?: Maybe<Scalars['Boolean']>;
  isCannotUseFightingArt?: Maybe<Scalars['Boolean']>;
  isDead?: Maybe<Scalars['Boolean']>;
  fightingArts?: Maybe<FightingArtUpdateManyInlineInput>;
  disorders?: Maybe<DisorderUpdateManyInlineInput>;
  settlement?: Maybe<SettlementUpdateOneInlineInput>;
  survivalActions?: Maybe<Array<SurvivalAction>>;
};

export type SurvivorUpdateManyInlineInput = {
  /** Create and connect multiple Survivor documents */
  create?: Maybe<Array<SurvivorCreateInput>>;
  /** Connect multiple existing Survivor documents */
  connect?: Maybe<Array<SurvivorConnectInput>>;
  /** Override currently-connected documents with multiple existing Survivor documents */
  set?: Maybe<Array<SurvivorWhereUniqueInput>>;
  /** Update multiple Survivor documents */
  update?: Maybe<Array<SurvivorUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Survivor documents */
  upsert?: Maybe<Array<SurvivorUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Survivor documents */
  disconnect?: Maybe<Array<SurvivorWhereUniqueInput>>;
  /** Delete multiple Survivor documents */
  delete?: Maybe<Array<SurvivorWhereUniqueInput>>;
};

export type SurvivorUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  survivalPoint?: Maybe<Scalars['Int']>;
  movement?: Maybe<Scalars['Int']>;
  accuracy?: Maybe<Scalars['Int']>;
  strength?: Maybe<Scalars['Int']>;
  evasion?: Maybe<Scalars['Int']>;
  luck?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Int']>;
  movementModifier?: Maybe<Scalars['Int']>;
  accuracyModifier?: Maybe<Scalars['Int']>;
  strengthModifier?: Maybe<Scalars['Int']>;
  evasionModifier?: Maybe<Scalars['Int']>;
  luckModifier?: Maybe<Scalars['Int']>;
  speedModifier?: Maybe<Scalars['Int']>;
  insanity?: Maybe<Scalars['Int']>;
  head?: Maybe<Scalars['Int']>;
  arm?: Maybe<Scalars['Int']>;
  body?: Maybe<Scalars['Int']>;
  waist?: Maybe<Scalars['Int']>;
  leg?: Maybe<Scalars['Int']>;
  huntXp?: Maybe<Scalars['Int']>;
  weaponProficiencyLevel?: Maybe<Scalars['Int']>;
  courage?: Maybe<Scalars['Int']>;
  understanding?: Maybe<Scalars['Int']>;
  isRerollUsed?: Maybe<Scalars['Boolean']>;
  ability?: Maybe<Scalars['String']>;
  impairment?: Maybe<Scalars['String']>;
  isSkipNextHunt?: Maybe<Scalars['Boolean']>;
  isCannotUseFightingArt?: Maybe<Scalars['Boolean']>;
  isDead?: Maybe<Scalars['Boolean']>;
  survivalActions?: Maybe<Array<SurvivalAction>>;
};

export type SurvivorUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: SurvivorWhereInput;
  /** Update many input */
  data: SurvivorUpdateManyInput;
};

export type SurvivorUpdateOneInlineInput = {
  /** Create and connect one Survivor document */
  create?: Maybe<SurvivorCreateInput>;
  /** Update single Survivor document */
  update?: Maybe<SurvivorUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Survivor document */
  upsert?: Maybe<SurvivorUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Survivor document */
  connect?: Maybe<SurvivorWhereUniqueInput>;
  /** Disconnect currently connected Survivor document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Survivor document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type SurvivorUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SurvivorWhereUniqueInput;
  /** Document to update */
  data: SurvivorUpdateInput;
};

export type SurvivorUpsertInput = {
  /** Create document if it didn't exist */
  create: SurvivorCreateInput;
  /** Update document if it exists */
  update: SurvivorUpdateInput;
};

export type SurvivorUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SurvivorWhereUniqueInput;
  /** Upsert data */
  data: SurvivorUpsertInput;
};

/** Identifies documents */
export type SurvivorWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SurvivorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SurvivorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SurvivorWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  survivalPoint?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  survivalPoint_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  survivalPoint_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  survivalPoint_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  survivalPoint_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  survivalPoint_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  survivalPoint_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  survivalPoint_gte?: Maybe<Scalars['Int']>;
  movement?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  movement_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  movement_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  movement_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  movement_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  movement_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  movement_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  movement_gte?: Maybe<Scalars['Int']>;
  accuracy?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  accuracy_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  accuracy_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  accuracy_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  accuracy_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  accuracy_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  accuracy_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  accuracy_gte?: Maybe<Scalars['Int']>;
  strength?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  strength_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  strength_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  strength_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  strength_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  strength_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  strength_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  strength_gte?: Maybe<Scalars['Int']>;
  evasion?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  evasion_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  evasion_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  evasion_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  evasion_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  evasion_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  evasion_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  evasion_gte?: Maybe<Scalars['Int']>;
  luck?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  luck_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  luck_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  luck_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  luck_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  luck_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  luck_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  luck_gte?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  speed_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  speed_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  speed_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  speed_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  speed_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  speed_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  speed_gte?: Maybe<Scalars['Int']>;
  movementModifier?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  movementModifier_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  movementModifier_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  movementModifier_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  movementModifier_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  movementModifier_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  movementModifier_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  movementModifier_gte?: Maybe<Scalars['Int']>;
  accuracyModifier?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  accuracyModifier_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  accuracyModifier_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  accuracyModifier_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  accuracyModifier_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  accuracyModifier_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  accuracyModifier_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  accuracyModifier_gte?: Maybe<Scalars['Int']>;
  strengthModifier?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  strengthModifier_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  strengthModifier_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  strengthModifier_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  strengthModifier_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  strengthModifier_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  strengthModifier_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  strengthModifier_gte?: Maybe<Scalars['Int']>;
  evasionModifier?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  evasionModifier_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  evasionModifier_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  evasionModifier_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  evasionModifier_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  evasionModifier_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  evasionModifier_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  evasionModifier_gte?: Maybe<Scalars['Int']>;
  luckModifier?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  luckModifier_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  luckModifier_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  luckModifier_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  luckModifier_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  luckModifier_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  luckModifier_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  luckModifier_gte?: Maybe<Scalars['Int']>;
  speedModifier?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  speedModifier_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  speedModifier_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  speedModifier_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  speedModifier_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  speedModifier_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  speedModifier_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  speedModifier_gte?: Maybe<Scalars['Int']>;
  insanity?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  insanity_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  insanity_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  insanity_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  insanity_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  insanity_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  insanity_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  insanity_gte?: Maybe<Scalars['Int']>;
  head?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  head_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  head_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  head_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  head_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  head_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  head_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  head_gte?: Maybe<Scalars['Int']>;
  arm?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  arm_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  arm_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  arm_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  arm_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  arm_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  arm_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  arm_gte?: Maybe<Scalars['Int']>;
  body?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  body_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  body_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  body_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  body_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  body_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  body_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  body_gte?: Maybe<Scalars['Int']>;
  waist?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  waist_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  waist_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  waist_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  waist_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  waist_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  waist_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  waist_gte?: Maybe<Scalars['Int']>;
  leg?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  leg_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  leg_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  leg_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  leg_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  leg_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  leg_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  leg_gte?: Maybe<Scalars['Int']>;
  huntXp?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  huntXp_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  huntXp_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  huntXp_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  huntXp_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  huntXp_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  huntXp_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  huntXp_gte?: Maybe<Scalars['Int']>;
  weaponProficiencyLevel?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  weaponProficiencyLevel_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  weaponProficiencyLevel_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  weaponProficiencyLevel_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  weaponProficiencyLevel_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  weaponProficiencyLevel_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  weaponProficiencyLevel_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  weaponProficiencyLevel_gte?: Maybe<Scalars['Int']>;
  courage?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  courage_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  courage_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  courage_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  courage_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  courage_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  courage_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  courage_gte?: Maybe<Scalars['Int']>;
  understanding?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  understanding_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  understanding_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  understanding_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  understanding_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  understanding_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  understanding_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  understanding_gte?: Maybe<Scalars['Int']>;
  isRerollUsed?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isRerollUsed_not?: Maybe<Scalars['Boolean']>;
  ability?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  ability_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ability_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  ability_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  ability_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  ability_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  ability_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  ability_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  ability_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  ability_not_ends_with?: Maybe<Scalars['String']>;
  impairment?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  impairment_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  impairment_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  impairment_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  impairment_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  impairment_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  impairment_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  impairment_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  impairment_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  impairment_not_ends_with?: Maybe<Scalars['String']>;
  isSkipNextHunt?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isSkipNextHunt_not?: Maybe<Scalars['Boolean']>;
  isCannotUseFightingArt?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isCannotUseFightingArt_not?: Maybe<Scalars['Boolean']>;
  isDead?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isDead_not?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  fightingArts_every?: Maybe<FightingArtWhereInput>;
  fightingArts_some?: Maybe<FightingArtWhereInput>;
  fightingArts_none?: Maybe<FightingArtWhereInput>;
  disorders_every?: Maybe<DisorderWhereInput>;
  disorders_some?: Maybe<DisorderWhereInput>;
  disorders_none?: Maybe<DisorderWhereInput>;
  settlement?: Maybe<SettlementWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  survivalActions?: Maybe<Array<SurvivalAction>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  survivalActions_not?: Maybe<Array<SurvivalAction>>;
  /** Matches if the field array contains *all* items provided to the filter */
  survivalActions_contains_all?: Maybe<Array<SurvivalAction>>;
  /** Matches if the field array contains at least one item provided to the filter */
  survivalActions_contains_some?: Maybe<Array<SurvivalAction>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  survivalActions_contains_none?: Maybe<Array<SurvivalAction>>;
};

/** References Survivor record uniquely */
export type SurvivorWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED',
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
};

/** User system model */
export type UserDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type UserConnectInput = {
  /** Document to connect */
  where: UserWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<UserEdge>;
  aggregate: Aggregate;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** The item at the end of the edge. */
  node: User;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK',
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserConnectInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: Maybe<Array<UserWhereUniqueInput>>;
  /** Disconnect multiple User documents */
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

export type Weapon = Node & {
  __typename?: 'Weapon';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Weapon>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  activation: Scalars['Int'];
  speed: Scalars['Int'];
  accuracy: Scalars['Int'];
  strength: Scalars['Int'];
  effect?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  image?: Maybe<Asset>;
  weaponProficiencyType?: Maybe<WeaponProficiencyType>;
  types: Array<GearType>;
  /** List of Weapon versions */
  history: Array<Version>;
};

export type WeaponDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type WeaponCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type WeaponUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type WeaponPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type WeaponImageArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type WeaponWeaponProficiencyTypeArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type WeaponHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type WeaponConnectInput = {
  /** Document to connect */
  where: WeaponWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type WeaponConnection = {
  __typename?: 'WeaponConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<WeaponEdge>;
  aggregate: Aggregate;
};

export type WeaponCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  activation: Scalars['Int'];
  speed: Scalars['Int'];
  accuracy: Scalars['Int'];
  strength: Scalars['Int'];
  effect?: Maybe<Scalars['String']>;
  image?: Maybe<AssetCreateOneInlineInput>;
  weaponProficiencyType?: Maybe<WeaponProficiencyTypeCreateOneInlineInput>;
  types?: Maybe<Array<GearType>>;
};

export type WeaponCreateManyInlineInput = {
  /** Create and connect multiple existing Weapon documents */
  create?: Maybe<Array<WeaponCreateInput>>;
  /** Connect multiple existing Weapon documents */
  connect?: Maybe<Array<WeaponWhereUniqueInput>>;
};

export type WeaponCreateOneInlineInput = {
  /** Create and connect one Weapon document */
  create?: Maybe<WeaponCreateInput>;
  /** Connect one existing Weapon document */
  connect?: Maybe<WeaponWhereUniqueInput>;
};

/** An edge in a connection. */
export type WeaponEdge = {
  __typename?: 'WeaponEdge';
  /** The item at the end of the edge. */
  node: Weapon;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type WeaponManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<WeaponWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<WeaponWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<WeaponWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  activation?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  activation_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  activation_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  activation_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  activation_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  activation_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  activation_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  activation_gte?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  speed_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  speed_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  speed_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  speed_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  speed_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  speed_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  speed_gte?: Maybe<Scalars['Int']>;
  accuracy?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  accuracy_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  accuracy_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  accuracy_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  accuracy_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  accuracy_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  accuracy_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  accuracy_gte?: Maybe<Scalars['Int']>;
  strength?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  strength_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  strength_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  strength_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  strength_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  strength_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  strength_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  strength_gte?: Maybe<Scalars['Int']>;
  effect?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  effect_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  effect_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  effect_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  effect_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  effect_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  effect_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  effect_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  effect_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  effect_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  image?: Maybe<AssetWhereInput>;
  weaponProficiencyType?: Maybe<WeaponProficiencyTypeWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  types?: Maybe<Array<GearType>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  types_not?: Maybe<Array<GearType>>;
  /** Matches if the field array contains *all* items provided to the filter */
  types_contains_all?: Maybe<Array<GearType>>;
  /** Matches if the field array contains at least one item provided to the filter */
  types_contains_some?: Maybe<Array<GearType>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  types_contains_none?: Maybe<Array<GearType>>;
};

export enum WeaponOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ActivationAsc = 'activation_ASC',
  ActivationDesc = 'activation_DESC',
  SpeedAsc = 'speed_ASC',
  SpeedDesc = 'speed_DESC',
  AccuracyAsc = 'accuracy_ASC',
  AccuracyDesc = 'accuracy_DESC',
  StrengthAsc = 'strength_ASC',
  StrengthDesc = 'strength_DESC',
  EffectAsc = 'effect_ASC',
  EffectDesc = 'effect_DESC',
  TypesAsc = 'types_ASC',
  TypesDesc = 'types_DESC',
}

export type WeaponProficiencyType = Node & {
  __typename?: 'WeaponProficiencyType';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<WeaponProficiencyType>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  weapons: Array<Weapon>;
  /** List of WeaponProficiencyType versions */
  history: Array<Version>;
};

export type WeaponProficiencyTypeDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type WeaponProficiencyTypeCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type WeaponProficiencyTypeUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type WeaponProficiencyTypePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type WeaponProficiencyTypeWeaponsArgs = {
  where?: Maybe<WeaponWhereInput>;
  orderBy?: Maybe<WeaponOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};

export type WeaponProficiencyTypeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type WeaponProficiencyTypeConnectInput = {
  /** Document to connect */
  where: WeaponProficiencyTypeWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type WeaponProficiencyTypeConnection = {
  __typename?: 'WeaponProficiencyTypeConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<WeaponProficiencyTypeEdge>;
  aggregate: Aggregate;
};

export type WeaponProficiencyTypeCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  weapons?: Maybe<WeaponCreateManyInlineInput>;
};

export type WeaponProficiencyTypeCreateManyInlineInput = {
  /** Create and connect multiple existing WeaponProficiencyType documents */
  create?: Maybe<Array<WeaponProficiencyTypeCreateInput>>;
  /** Connect multiple existing WeaponProficiencyType documents */
  connect?: Maybe<Array<WeaponProficiencyTypeWhereUniqueInput>>;
};

export type WeaponProficiencyTypeCreateOneInlineInput = {
  /** Create and connect one WeaponProficiencyType document */
  create?: Maybe<WeaponProficiencyTypeCreateInput>;
  /** Connect one existing WeaponProficiencyType document */
  connect?: Maybe<WeaponProficiencyTypeWhereUniqueInput>;
};

/** An edge in a connection. */
export type WeaponProficiencyTypeEdge = {
  __typename?: 'WeaponProficiencyTypeEdge';
  /** The item at the end of the edge. */
  node: WeaponProficiencyType;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type WeaponProficiencyTypeManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<WeaponProficiencyTypeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<WeaponProficiencyTypeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<WeaponProficiencyTypeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  weapons_every?: Maybe<WeaponWhereInput>;
  weapons_some?: Maybe<WeaponWhereInput>;
  weapons_none?: Maybe<WeaponWhereInput>;
};

export enum WeaponProficiencyTypeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

export type WeaponProficiencyTypeUpdateInput = {
  name?: Maybe<Scalars['String']>;
  weapons?: Maybe<WeaponUpdateManyInlineInput>;
};

export type WeaponProficiencyTypeUpdateManyInlineInput = {
  /** Create and connect multiple WeaponProficiencyType documents */
  create?: Maybe<Array<WeaponProficiencyTypeCreateInput>>;
  /** Connect multiple existing WeaponProficiencyType documents */
  connect?: Maybe<Array<WeaponProficiencyTypeConnectInput>>;
  /** Override currently-connected documents with multiple existing WeaponProficiencyType documents */
  set?: Maybe<Array<WeaponProficiencyTypeWhereUniqueInput>>;
  /** Update multiple WeaponProficiencyType documents */
  update?: Maybe<Array<WeaponProficiencyTypeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple WeaponProficiencyType documents */
  upsert?: Maybe<Array<WeaponProficiencyTypeUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple WeaponProficiencyType documents */
  disconnect?: Maybe<Array<WeaponProficiencyTypeWhereUniqueInput>>;
  /** Delete multiple WeaponProficiencyType documents */
  delete?: Maybe<Array<WeaponProficiencyTypeWhereUniqueInput>>;
};

export type WeaponProficiencyTypeUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
};

export type WeaponProficiencyTypeUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: WeaponProficiencyTypeWhereInput;
  /** Update many input */
  data: WeaponProficiencyTypeUpdateManyInput;
};

export type WeaponProficiencyTypeUpdateOneInlineInput = {
  /** Create and connect one WeaponProficiencyType document */
  create?: Maybe<WeaponProficiencyTypeCreateInput>;
  /** Update single WeaponProficiencyType document */
  update?: Maybe<WeaponProficiencyTypeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single WeaponProficiencyType document */
  upsert?: Maybe<WeaponProficiencyTypeUpsertWithNestedWhereUniqueInput>;
  /** Connect existing WeaponProficiencyType document */
  connect?: Maybe<WeaponProficiencyTypeWhereUniqueInput>;
  /** Disconnect currently connected WeaponProficiencyType document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected WeaponProficiencyType document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type WeaponProficiencyTypeUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: WeaponProficiencyTypeWhereUniqueInput;
  /** Document to update */
  data: WeaponProficiencyTypeUpdateInput;
};

export type WeaponProficiencyTypeUpsertInput = {
  /** Create document if it didn't exist */
  create: WeaponProficiencyTypeCreateInput;
  /** Update document if it exists */
  update: WeaponProficiencyTypeUpdateInput;
};

export type WeaponProficiencyTypeUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: WeaponProficiencyTypeWhereUniqueInput;
  /** Upsert data */
  data: WeaponProficiencyTypeUpsertInput;
};

/** Identifies documents */
export type WeaponProficiencyTypeWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<WeaponProficiencyTypeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<WeaponProficiencyTypeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<WeaponProficiencyTypeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  weapons_every?: Maybe<WeaponWhereInput>;
  weapons_some?: Maybe<WeaponWhereInput>;
  weapons_none?: Maybe<WeaponWhereInput>;
};

/** References WeaponProficiencyType record uniquely */
export type WeaponProficiencyTypeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type WeaponUpdateInput = {
  name?: Maybe<Scalars['String']>;
  activation?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Int']>;
  accuracy?: Maybe<Scalars['Int']>;
  strength?: Maybe<Scalars['Int']>;
  effect?: Maybe<Scalars['String']>;
  image?: Maybe<AssetUpdateOneInlineInput>;
  weaponProficiencyType?: Maybe<WeaponProficiencyTypeUpdateOneInlineInput>;
  types?: Maybe<Array<GearType>>;
};

export type WeaponUpdateManyInlineInput = {
  /** Create and connect multiple Weapon documents */
  create?: Maybe<Array<WeaponCreateInput>>;
  /** Connect multiple existing Weapon documents */
  connect?: Maybe<Array<WeaponConnectInput>>;
  /** Override currently-connected documents with multiple existing Weapon documents */
  set?: Maybe<Array<WeaponWhereUniqueInput>>;
  /** Update multiple Weapon documents */
  update?: Maybe<Array<WeaponUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Weapon documents */
  upsert?: Maybe<Array<WeaponUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Weapon documents */
  disconnect?: Maybe<Array<WeaponWhereUniqueInput>>;
  /** Delete multiple Weapon documents */
  delete?: Maybe<Array<WeaponWhereUniqueInput>>;
};

export type WeaponUpdateManyInput = {
  activation?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Int']>;
  accuracy?: Maybe<Scalars['Int']>;
  strength?: Maybe<Scalars['Int']>;
  effect?: Maybe<Scalars['String']>;
  types?: Maybe<Array<GearType>>;
};

export type WeaponUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: WeaponWhereInput;
  /** Update many input */
  data: WeaponUpdateManyInput;
};

export type WeaponUpdateOneInlineInput = {
  /** Create and connect one Weapon document */
  create?: Maybe<WeaponCreateInput>;
  /** Update single Weapon document */
  update?: Maybe<WeaponUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Weapon document */
  upsert?: Maybe<WeaponUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Weapon document */
  connect?: Maybe<WeaponWhereUniqueInput>;
  /** Disconnect currently connected Weapon document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Weapon document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type WeaponUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: WeaponWhereUniqueInput;
  /** Document to update */
  data: WeaponUpdateInput;
};

export type WeaponUpsertInput = {
  /** Create document if it didn't exist */
  create: WeaponCreateInput;
  /** Update document if it exists */
  update: WeaponUpdateInput;
};

export type WeaponUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: WeaponWhereUniqueInput;
  /** Upsert data */
  data: WeaponUpsertInput;
};

/** Identifies documents */
export type WeaponWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<WeaponWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<WeaponWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<WeaponWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  activation?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  activation_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  activation_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  activation_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  activation_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  activation_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  activation_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  activation_gte?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  speed_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  speed_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  speed_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  speed_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  speed_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  speed_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  speed_gte?: Maybe<Scalars['Int']>;
  accuracy?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  accuracy_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  accuracy_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  accuracy_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  accuracy_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  accuracy_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  accuracy_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  accuracy_gte?: Maybe<Scalars['Int']>;
  strength?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  strength_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  strength_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  strength_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  strength_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  strength_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  strength_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  strength_gte?: Maybe<Scalars['Int']>;
  effect?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  effect_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  effect_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  effect_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  effect_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  effect_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  effect_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  effect_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  effect_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  effect_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  image?: Maybe<AssetWhereInput>;
  weaponProficiencyType?: Maybe<WeaponProficiencyTypeWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  types?: Maybe<Array<GearType>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  types_not?: Maybe<Array<GearType>>;
  /** Matches if the field array contains *all* items provided to the filter */
  types_contains_all?: Maybe<Array<GearType>>;
  /** Matches if the field array contains at least one item provided to the filter */
  types_contains_some?: Maybe<Array<GearType>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  types_contains_none?: Maybe<Array<GearType>>;
};

/** References Weapon record uniquely */
export type WeaponWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none',
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual',
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany',
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many',
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update',
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union',
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined',
}
