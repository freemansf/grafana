// Code generated - EDITING IS FUTILE. DO NOT EDIT.
//
// Generated by:
//     public/app/plugins/gen.go
// Using jennies:
//     TSTypesJenny
//     PluginTSTypesJenny
//
// Run 'make gen-cue' from repository root to regenerate.

import * as common from '@grafana/schema';

export interface Options extends common.SingleStatBaseOptions {
  minVizHeight: number;
  minVizWidth: number;
  showThresholdLabels: boolean;
  showThresholdMarkers: boolean;
}

export const defaultOptions: Partial<Options> = {
  minVizHeight: 200,
  minVizWidth: 250,
  showThresholdLabels: false,
  showThresholdMarkers: true,
};
