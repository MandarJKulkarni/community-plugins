/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * DataVolumeSourceRegistry provides the parameters to create a Data Volume from an registry source
 * @export
 * @interface V1alpha1DataVolumeSourceRegistry
 */
export interface V1alpha1DataVolumeSourceRegistry {
  /**
   * CertConfigMap provides a reference to the Registry certs
   * @type {string}
   * @memberof V1alpha1DataVolumeSourceRegistry
   */
  certConfigMap?: string;
  /**
   * SecretRef provides the secret reference needed to access the Registry source
   * @type {string}
   * @memberof V1alpha1DataVolumeSourceRegistry
   */
  secretRef?: string;
  /**
   * URL is the url of the Registry source
   * @type {string}
   * @memberof V1alpha1DataVolumeSourceRegistry
   */
  url?: string;
}