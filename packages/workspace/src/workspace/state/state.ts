/*
*                      Copyright 2020 Salto Labs Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with
* the License.  You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
import { Element, ElemID, ElementMap } from '@salto-io/adapter-api'
import { ElementsSource } from '../elements_source'
import { PathIndex } from '../path_index'

export type StateData = {
  elements: ElementMap
  // The date of the last fetch
  servicesUpdateDate: Record<string, Date>
  pathIndex: PathIndex
}

export interface State extends ElementsSource {
  set(element: Element): Promise<void>
  remove(id: ElemID): Promise<void>
  override(element: Element | Element[], services?: string[]): Promise<void>
  getServicesUpdateDates(): Promise<Record<string, Date>>
  existingServices(): Promise<string[]>
  overridePathIndex(unmergedElements: Element[]): Promise<void>
  getPathIndex(): Promise<PathIndex>
  getHash(): Promise<string>
}
