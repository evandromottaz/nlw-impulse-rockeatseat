"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const submit_feedback_use_case_1 = require("./submit-feedback-use-case");
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
const submitFeedback = new submit_feedback_use_case_1.SubmitFeedbackUseCase({ create: createFeedbackSpy }, { sendMail: sendMailSpy });
describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenShot: 'data:image/png;base64,dsadasdsadsasd',
        })).resolves.not.toThrow();
    });
    it('should not be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenShot: 'data:image/png;base64,dsadasdsadsasd',
        })).rejects.toThrow();
    });
    it('should not be able to submit feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenShot: 'data:image/png;base64,dsadasdsadsasd',
        })).rejects.toThrow();
    });
    it('should not be able to submit feedback width an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example',
            screenShot: 'test.jps',
        })).rejects.toThrow();
    });
});
