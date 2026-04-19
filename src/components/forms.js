export function renderQuoteModal({ open, planOptions, draft, errors }) {
  if (!open) {
    return '';
  }

  const form = {
    id: draft?.id ?? '',
    planId: draft?.planId ?? '',
    fullName: draft?.fullName ?? '',
    email: draft?.email ?? '',
    phone: draft?.phone ?? '',
    ageRange: draft?.ageRange ?? '',
    contactPreference: draft?.contactPreference ?? 'โทรกลับ',
    coverageGoal: draft?.coverageGoal ?? '',
    note: draft?.note ?? '',
  };

  return `
    <div class="modal-backdrop" data-modal-backdrop="true">
      <aside class="modal-panel" aria-modal="true" role="dialog" aria-labelledby="quote-modal-title">
        <div class="modal-header">
          <div>
            <span class="section-eyebrow">แบบฟอร์มใช้งานจริง</span>
            <h3 id="quote-modal-title">${draft?.id ? 'แก้ไขคำขอรับคำปรึกษา' : 'ส่งคำขอรับคำปรึกษา'}</h3>
          </div>
          <button class="icon-button" type="button" data-modal-close="true">✕</button>
        </div>
        <div class="modal-scroll-area">
          <form id="quote-form" class="quote-form">
            <input type="hidden" name="id" value="${form.id}" />
            <label>
              <span>แผนที่สนใจ</span>
              <select name="planId">
                <option value="">เลือกภายหลัง</option>
                ${planOptions
                  .map(
                    (plan) =>
                      `<option value="${plan.id}" ${plan.id === form.planId ? 'selected' : ''}>${plan.displayNameTh ?? plan.name}</option>`,
                  )
                  .join('')}
              </select>
              ${errors.planId ? `<small class="field-error">${errors.planId}</small>` : ''}
            </label>
            <div class="form-grid">
              <label>
                <span>ชื่อ - นามสกุล</span>
                <input name="fullName" value="${form.fullName}" placeholder="เช่น ปวีณ์ สายชล" />
                ${errors.fullName ? `<small class="field-error">${errors.fullName}</small>` : ''}
              </label>
              <label>
                <span>อีเมล</span>
                <input name="email" type="email" value="${form.email}" placeholder="name@example.com" />
                ${errors.email ? `<small class="field-error">${errors.email}</small>` : ''}
              </label>
            </div>
            <div class="form-grid">
              <label>
                <span>เบอร์โทร</span>
                <input name="phone" value="${form.phone}" placeholder="08x-xxx-xxxx" />
                ${errors.phone ? `<small class="field-error">${errors.phone}</small>` : ''}
              </label>
              <label>
                <span>ช่วงอายุ</span>
                <select name="ageRange">
                  <option value="">เลือกช่วงอายุ</option>
                  ${['18-24', '25-34', '35-44', '45-54', '55+']
                    .map(
                      (ageRange) =>
                        `<option value="${ageRange}" ${ageRange === form.ageRange ? 'selected' : ''}>${ageRange}</option>`,
                    )
                    .join('')}
                </select>
                ${errors.ageRange ? `<small class="field-error">${errors.ageRange}</small>` : ''}
              </label>
            </div>
            <div class="form-grid">
              <label>
                <span>ช่องทางที่สะดวก</span>
                <select name="contactPreference">
                  ${['โทรกลับ', 'LINE', 'อีเมล']
                    .map(
                      (channel) =>
                        `<option value="${channel}" ${channel === form.contactPreference ? 'selected' : ''}>${channel}</option>`,
                    )
                    .join('')}
                </select>
              </label>
              <label>
                <span>เป้าหมายความคุ้มครอง</span>
                <input name="coverageGoal" value="${form.coverageGoal}" placeholder="เช่น สุขภาพครอบครัว / รถคันแรก" />
                ${errors.coverageGoal ? `<small class="field-error">${errors.coverageGoal}</small>` : ''}
              </label>
            </div>
            <label>
              <span>รายละเอียดเพิ่มเติม</span>
              <textarea name="note" rows="4" placeholder="ระบุข้อมูลประกอบ เช่น งบประมาณหรือเงื่อนไขที่ต้องการ">${form.note}</textarea>
            </label>
            <div class="modal-actions">
              <button class="button button-secondary" type="button" data-modal-close="true">ยกเลิก</button>
              <button class="button button-primary" type="submit">${draft?.id ? 'บันทึกการแก้ไข' : 'ส่งคำขอ'}</button>
            </div>
          </form>
        </div>
      </aside>
    </div>
  `;
}
