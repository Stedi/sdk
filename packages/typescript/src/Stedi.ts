// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  type CreateProfessionalClaimSubmissionCommandInput,
  type CreateProfessionalClaimSubmissionCommandOutput,
  CreateProfessionalClaimSubmissionCommand,
} from "./commands/CreateProfessionalClaimSubmissionCommand";
import {
  type GetProfessionalClaimSubmissionCommandInput,
  type GetProfessionalClaimSubmissionCommandOutput,
  GetProfessionalClaimSubmissionCommand,
} from "./commands/GetProfessionalClaimSubmissionCommand";
import {
  type ValidateProfessionalClaimSubmissionCommandInput,
  type ValidateProfessionalClaimSubmissionCommandOutput,
  ValidateProfessionalClaimSubmissionCommand,
} from "./commands/ValidateProfessionalClaimSubmissionCommand";
import { StediClient } from "./StediClient";

const commands = {
  CreateProfessionalClaimSubmissionCommand,
  GetProfessionalClaimSubmissionCommand,
  ValidateProfessionalClaimSubmissionCommand,
};

export interface Stedi {
  /**
   * @see {@link CreateProfessionalClaimSubmissionCommand}
   */
  createProfessionalClaimSubmission(
    args: CreateProfessionalClaimSubmissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProfessionalClaimSubmissionCommandOutput>;
  createProfessionalClaimSubmission(
    args: CreateProfessionalClaimSubmissionCommandInput,
    cb: (err: any, data?: CreateProfessionalClaimSubmissionCommandOutput) => void
  ): void;
  createProfessionalClaimSubmission(
    args: CreateProfessionalClaimSubmissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProfessionalClaimSubmissionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProfessionalClaimSubmissionCommand}
   */
  getProfessionalClaimSubmission(
    args: GetProfessionalClaimSubmissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProfessionalClaimSubmissionCommandOutput>;
  getProfessionalClaimSubmission(
    args: GetProfessionalClaimSubmissionCommandInput,
    cb: (err: any, data?: GetProfessionalClaimSubmissionCommandOutput) => void
  ): void;
  getProfessionalClaimSubmission(
    args: GetProfessionalClaimSubmissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProfessionalClaimSubmissionCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidateProfessionalClaimSubmissionCommand}
   */
  validateProfessionalClaimSubmission(
    args: ValidateProfessionalClaimSubmissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateProfessionalClaimSubmissionCommandOutput>;
  validateProfessionalClaimSubmission(
    args: ValidateProfessionalClaimSubmissionCommandInput,
    cb: (err: any, data?: ValidateProfessionalClaimSubmissionCommandOutput) => void
  ): void;
  validateProfessionalClaimSubmission(
    args: ValidateProfessionalClaimSubmissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateProfessionalClaimSubmissionCommandOutput) => void
  ): void;
}

/**
 * The Stedi SDK — unified, typed access to Stedi's healthcare APIs.
 * @public
 */
export class Stedi extends StediClient implements Stedi {}
createAggregatedClient(commands, Stedi);
