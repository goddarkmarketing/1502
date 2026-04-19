const STORAGE_KEYS = {
  requests: 'curated-coverage-requests',
  compare: 'curated-coverage-compare',
};

export const sampleRequests = [
  {
    id: 'sample-request-health',
    planId: 'plan-health-smart',
    fullName: 'ปวีณา ศุภกิจ',
    email: 'paweena@example.com',
    phone: '0891234567',
    ageRange: '35-44',
    contactPreference: 'โทรกลับ',
    coverageGoal: 'มองหาแผนสุขภาพสำหรับครอบครัว เน้น OPD/IPD และห้องเดี่ยว',
    note: 'สะดวกคุยช่วงเย็นหลัง 18:00 น.',
    status: 'รอติดต่อกลับ',
    createdAt: '2026-04-10T09:30:00.000Z',
  },
  {
    id: 'sample-request-car',
    planId: 'plan-car-easy',
    fullName: 'ธนวัฒน์ ภูวดล',
    email: 'thanawat@example.com',
    phone: '0819876543',
    ageRange: '25-34',
    contactPreference: 'LINE',
    coverageGoal: 'ต้องการประกันรถยนต์ที่คุ้มครองซ่อมห้างและช่วยเหลือฉุกเฉิน 24 ชั่วโมง',
    note: 'มีประวัติต่ออายุเดิม ต้องการเทียบเบี้ยก่อนตัดสินใจ',
    status: 'กำลังประสานงาน',
    createdAt: '2026-04-14T03:15:00.000Z',
  },
];

const listeners = new Set();

const state = {
  loading: true,
  error: '',
  mobileMenuOpen: false,
  quoteModalOpen: false,
  editingRequestId: null,
  quoteDraft: null,
  requests: [],
  compareIds: [],
  selectedPlanSlug: null,
  lastToast: '',
};

function emit() {
  listeners.forEach((listener) => listener(getState()));
}

function readStorage(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    state.error = 'ไม่สามารถอ่านข้อมูลที่บันทึกไว้ในเครื่องได้';
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    state.error = '';
  } catch (error) {
    state.error = 'ไม่สามารถบันทึกข้อมูลลงในเครื่องได้';
  }
}

export function hydrateStore() {
  state.loading = true;
  emit();

  window.setTimeout(() => {
    const storedRequests = readStorage(STORAGE_KEYS.requests, null);
    if (storedRequests?.length) {
      state.requests = storedRequests;
    } else {
      state.requests = sampleRequests;
      writeStorage(STORAGE_KEYS.requests, sampleRequests);
    }
    state.compareIds = readStorage(STORAGE_KEYS.compare, []);
    state.loading = false;
    emit();
  }, 260);
}

export function subscribe(listener) {
  listeners.add(listener);
  listener(getState());

  return () => {
    listeners.delete(listener);
  };
}

export function getState() {
  return structuredClone(state);
}

export function setState(patch) {
  Object.assign(state, patch);
  emit();
}

export function queueToast(message) {
  state.lastToast = message;
  emit();

  window.setTimeout(() => {
    if (state.lastToast === message) {
      state.lastToast = '';
      emit();
    }
  }, 2800);
}

export function toggleCompare(planId) {
  const isSelected = state.compareIds.includes(planId);
  state.compareIds = isSelected
    ? state.compareIds.filter((id) => id !== planId)
    : [...state.compareIds, planId].slice(-3);
  writeStorage(STORAGE_KEYS.compare, state.compareIds);
  queueToast(
    isSelected ? 'นำแผนออกจากการเปรียบเทียบแล้ว' : 'เพิ่มแผนลงรายการเปรียบเทียบแล้ว',
  );
}

export function upsertRequest(payload) {
  const requests = [...state.requests];
  const existingIndex = requests.findIndex((item) => item.id === payload.id);

  if (existingIndex >= 0) {
    requests[existingIndex] = payload;
  } else {
    requests.unshift(payload);
  }

  state.requests = requests;
  state.quoteModalOpen = false;
  state.editingRequestId = null;
  state.quoteDraft = null;
  writeStorage(STORAGE_KEYS.requests, state.requests);
  queueToast(existingIndex >= 0 ? 'อัปเดตคำขอเรียบร้อยแล้ว' : 'ส่งคำขอสำเร็จแล้ว');
}

export function deleteRequest(requestId) {
  state.requests = state.requests.filter((request) => request.id !== requestId);
  writeStorage(STORAGE_KEYS.requests, state.requests);
  queueToast('ลบคำขอเรียบร้อยแล้ว');
}
